# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains App Router routes, metadata, and page-level layouts. Keep route logic thin—delegate reusable UI to components.
- `components/` houses shared UI (including shadcn-derived primitives); co-locate variants under the same folder when they share styling.
- `lib/` and `hooks/` store data utilities, integrations (Medium, Raindrop.io), and client hooks. Keep external API access inside `lib/` to centralize secrets.
- `public/` serves static assets such as the Open Graph image; `types/` defines shared TypeScript contracts.

## Build, Test, and Development Commands
- `npm run dev` launches the Next.js dev server with hot reload.
- `npm run build` produces the production bundle and catches type-level issues.
- `npm run start` serves the built app locally for smoke-testing.
- `npm run lint` runs the Next.js ESLint config; use it before pushing to auto-fix with `--fix` when possible.

## Coding Style & Naming Conventions
- Use TypeScript with strict typing; prefer `PascalCase` for components and `camelCase` for helpers, matching existing files.
- Follow the established two-space indentation and single quotes for imports; JSX attributes stay double quoted for Tailwind classes.
- Tailwind utility-first styling is the norm—group related utilities and keep custom CSS in `tailwind.config.ts` when needed.

## Testing Guidelines
- Automated tests are not yet in place; at minimum run `npm run lint` and `npm run build` before submitting.
- When adding tests, colocate them beside the feature (e.g. `component.test.tsx`) and use React Testing Library patterns for user-facing behavior.
- UI changes should include manual verification notes or screenshots in the PR description.

## Commit & Pull Request Guidelines
- Follow the existing `<type>: <summary>` pattern (`fix:`, `chore:`, `feat:`) observed in Git history.
- Scope each commit to a single concern and reference related paths. Avoid noisy formatting-only commits unless intentional.
- PRs should include a clear summary, linked issue or task, the commands/tests executed, and screenshots for visual updates.

## Security & Configuration Tips
- Store secrets in `.env.local`; never commit tokens such as `RAINDROP_ACCESS_TOKEN` or `PLAYAI_API_KEY`.
- When introducing new integrations, document required environment variables in both this guide and `README.md`.
