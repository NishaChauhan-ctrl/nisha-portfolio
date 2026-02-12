# Nisha Chauhan - AI Product Builder Portfolio

## Overview

This is a personal portfolio website for Nisha Chauhan, an AI Product Builder. It's a single-page application showcasing projects, skills, process, and contact information. The site features smooth animations, light/dark theme toggling, and a modern design with floating decorative shapes.

The project follows a full-stack architecture with a React frontend and Express backend, though the current functionality is primarily frontend-focused (static portfolio content). The backend is set up with a storage layer and database schema ready for future dynamic features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives
- **Animations**: Framer Motion for scroll-triggered animations, floating shapes, and transitions
- **State Management**: TanStack React Query for server state; React Context for theme
- **Build Tool**: Vite with path aliases (`@/` → `client/src/`, `@shared/` → `shared/`)

The frontend has two pages:
1. **Home page** (`/`): Hero, About, Work (intro), Process, Contact, Footer sections with doodle/heart dividers between each section. Navigation uses smooth scroll to anchor sections.
2. **Work Experience page** (`/work`): Detailed work experience, skills with categories, tools with icons, and projects (Recent Work) section. Has a "Back home" button.

Key design features:
- Typing animation on "Hi! I'm Nisha" in hero
- Sticky note styled buttons (CSS class `sticky-note-btn`) throughout the site instead of standard buttons
- Generated illustration of girl with laptop and idea bubble in hero section
- Doodle/heart dividers (`DoodleDivider` component) between sections
- About section text is centered with the personal paragraph highlighted as a sticky note
- Theme toggling persists to localStorage.

### Backend
- **Framework**: Express 5 (TypeScript, ESM)
- **Runtime**: tsx for development, esbuild for production bundling
- **API Pattern**: All API routes prefixed with `/api` (registered in `server/routes.ts`)
- **Storage Layer**: Interface-based abstraction (`IStorage`) with an in-memory implementation (`MemStorage`). This is designed to be swapped to a database-backed implementation.
- **Static Serving**: In production, the built client files are served from `dist/public`
- **Dev Server**: Vite dev server is used as middleware in development for HMR

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` — currently has a `users` table with `id` (UUID), `username`, and `password`
- **Validation**: Zod schemas generated from Drizzle schemas via `drizzle-zod`
- **Migrations**: Drizzle Kit with `db:push` command; migrations output to `./migrations`
- **Connection**: Requires `DATABASE_URL` environment variable
- **Note**: The current storage implementation is in-memory (`MemStorage`). The Drizzle schema is defined but not yet connected to the storage layer. When adding database support, create a `DatabaseStorage` class implementing `IStorage` and switch the export in `server/storage.ts`.

### Shared Code
- `shared/schema.ts` contains database schemas and TypeScript types used by both frontend and backend
- Path alias `@shared/*` maps to the `shared/` directory

### Build Process
- **Development**: `npm run dev` runs the Express server with Vite middleware for HMR
- **Production Build**: `npm run build` runs a custom build script (`script/build.ts`) that:
  1. Builds the client with Vite (output: `dist/public`)
  2. Builds the server with esbuild (output: `dist/index.cjs`), bundling select dependencies
- **Production Start**: `npm start` runs `node dist/index.cjs`

### Key Design Decisions
- **Monorepo-style structure**: Client (`client/`), server (`server/`), and shared code (`shared/`) in one repo with TypeScript path aliases
- **Interface-based storage**: The `IStorage` interface allows swapping between in-memory and database implementations without changing route handlers
- **Component library**: Full shadcn/ui component library is installed, providing a consistent design system
- **SSR-free**: The app is a client-side SPA; no server-side rendering

## External Dependencies

### Required Services
- **PostgreSQL**: Required for database functionality (connection via `DATABASE_URL` environment variable). Currently the app runs with in-memory storage, but the schema and Drizzle config are ready for Postgres.

### Key npm Packages
- **Frontend**: React, Wouter, Framer Motion, TanStack React Query, Tailwind CSS, Radix UI (via shadcn/ui), react-icons, Lucide icons, recharts
- **Backend**: Express 5, Drizzle ORM, drizzle-zod, connect-pg-simple (session store), Zod
- **Build**: Vite, esbuild, tsx, TypeScript
- **Replit-specific**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`

### Fonts (External)
- Google Fonts: Architects Daughter, DM Sans, Fira Code, Geist Mono, Plus Jakarta Sans, Playfair Display