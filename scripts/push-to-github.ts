import { Octokit } from '@octokit/rest';
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? 'depl ' + process.env.WEB_REPL_RENEWAL
    : null;
  if (!xReplitToken) throw new Error('X_REPLIT_TOKEN not found');

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    { headers: { 'Accept': 'application/json', 'X_REPLIT_TOKEN': xReplitToken } }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
  if (!accessToken) throw new Error('GitHub not connected');
  return accessToken;
}

function getTrackedFiles(): string[] {
  const output = execSync('git ls-files', { encoding: 'utf-8', cwd: '/home/runner/workspace' });
  return output.trim().split('\n').filter(f => f.length > 0);
}

async function main() {
  const token = await getAccessToken();
  const octokit = new Octokit({ auth: token });
  const { data: user } = await octokit.users.getAuthenticated();

  const owner = user.login;
  const repo = 'nisha-portfolio';
  console.log(`Pushing to ${owner}/${repo}...`);

  // Step 1: Initialize repo with a README (needed for empty repos)
  console.log('Initializing repo with README...');
  try {
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: 'README.md',
      message: 'Initialize repository',
      content: Buffer.from('# Nisha Chauhan Portfolio\n\nPersonal portfolio website - AI Product Builder\n').toString('base64'),
    });
    console.log('README created, repo initialized.');
  } catch (e: any) {
    if (e.status === 422) {
      console.log('README already exists, repo is initialized.');
    } else {
      throw e;
    }
  }

  // Step 2: Get the latest commit SHA on main
  const { data: ref } = await octokit.git.getRef({ owner, repo, ref: 'heads/main' });
  const latestCommitSha = ref.object.sha;
  console.log('Latest commit:', latestCommitSha);

  // Step 3: Get all tracked files
  const files = getTrackedFiles();
  console.log(`Found ${files.length} tracked files to upload`);

  // Step 4: Create blobs for all files
  const treeItems: { path: string; mode: '100644'; type: 'blob'; sha: string }[] = [];
  let count = 0;

  // Process in batches of 10 for speed
  const batchSize = 10;
  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    const promises = batch.map(async (filePath) => {
      const fullPath = path.join('/home/runner/workspace', filePath);
      if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) return null;

      const content = fs.readFileSync(fullPath);
      const { data: blob } = await octokit.git.createBlob({
        owner,
        repo,
        content: content.toString('base64'),
        encoding: 'base64',
      });

      return {
        path: filePath,
        mode: '100644' as const,
        type: 'blob' as const,
        sha: blob.sha,
      };
    });

    const results = await Promise.all(promises);
    for (const r of results) {
      if (r) treeItems.push(r);
    }

    count += batch.length;
    console.log(`  Uploaded ${Math.min(count, files.length)}/${files.length} files...`);
  }

  // Step 5: Create tree
  console.log('Creating tree...');
  const { data: tree } = await octokit.git.createTree({
    owner,
    repo,
    base_tree: undefined,
    tree: treeItems,
  });

  // Step 6: Create commit
  console.log('Creating commit...');
  const { data: commit } = await octokit.git.createCommit({
    owner,
    repo,
    message: 'Portfolio: Nisha Chauhan - AI Product Builder',
    tree: tree.sha,
    parents: [latestCommitSha],
  });

  // Step 7: Update main ref
  console.log('Updating main branch...');
  await octokit.git.updateRef({
    owner,
    repo,
    ref: 'heads/main',
    sha: commit.sha,
    force: true,
  });

  console.log(`\nDone! Your portfolio code is live at: https://github.com/${owner}/${repo}`);
}

main().catch(console.error);
