<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — my-prot (personal portfolio)

A motion-heavy, animated portfolio site built on a **custom Next.js 16** + **React 19** + **Tailwind CSS v4** stack. Read the block above first — this is not stock Next.js.

## Stack & tooling

- **Next.js 16.3** (custom build — verify APIs in `node_modules/next/dist/docs/` before use)
- **React 19.2**, **TypeScript 5**
- **Tailwind CSS v4** — CSS-first config, no `tailwind.config.js`
- **Animation**: `motion` (import from `motion/react`, NOT `framer-motion`), `gsap`, and `lenis` (smooth scroll)
- **UI primitives**: `@base-ui/react`, plus local shadcn-style components in `src/components/ui`
- **Icons**: `lucide-react`
- **Package manager**: **bun** (`bun install`, `bun run dev`). npm scripts (`dev`, `build`, `start`, `lint`) exist too.

## Commands

```bash
bun install        # install deps (or bun i)
bun run dev        # start dev server
bun run build      # production build
bun run start      # serve production build
bun run lint       # eslint
```

Type-check is part of `build`/editor; there is no standalone `typecheck` script.

## Project conventions

### Import alias
`@/` maps to `src/`. Always use it (e.g. `import TransitionLink from "@/components/shared/TransitionLink"`).

### File structure
- `src/app/` — routes. `(public)` group holds the public pages; `project/[slug]/page.tsx` is the dynamic project detail route.
- `src/components/` — split by area: `common/`, `shared/`, `ui/`, `animation/`, `home/`, `projectDetails/`.
- `src/providers/` — client providers: `TransitionProvider` (page transitions), `SmoothScroll` (Lenis).
- `src/data/` — static content (`projectData.ts`, `servicesData.ts`). Add/edit project entries here, not in components.
- `src/types/` — shared TS types (e.g. `project.type.ts`).
- `src/lib/` — `utils.ts` (`cn` helper), `site.ts` (site URL/name), `lenis.ts`.
- `src/fonts/` — local font files exposed as CSS variables (`neueMontreal`, `humane`).

### Custom Next.js API notes (this build)
- Route `params` and `searchParams` are **Promises** — `const { slug } = await params`.
- Layouts use a typed helper: `LayoutProps<"/">` (see `src/app/layout.tsx`). Prefer this over `React.LayoutProps`/`{ children: ReactNode }` where a route-specific type exists.
- `generateMetadata` / `generateViewport` follow the standard shape but confirm in `node_modules/next/dist/docs/` if unsure.

### Styling
- **Tailwind v4**: theme tokens live in `src/app/globals.css` under `@theme` / `@custom-variant`. Custom keyframes/animations (e.g. `marquee`) are defined there, not in JS config.
- Two custom font CSS variables: `--font-sans` (`font-sans`) and `--font-heading` (`font-heading`). Use `font-heading` for display type.
- **Responsive design decision (important):**
  - **Mobile** (default) = single column, smaller text.
  - **Tablet (`md`)** = **same 12-column layout as desktop** but with **mobile-sized text**.
  - **Desktop (`lg`/`xl`)** = 12-column layout **and** scaled-up text.
  - Implementation: layout grids switch at `md:` (`md:grid-cols-12`, `md:col-span-*`). Text-size bumps use `lg:`/`xl:` (`md:text-*` was deliberately removed so tablet stays small). Preserve this split when editing these components.

### Animation & page transitions
- Smooth scrolling is provided globally by the `SmoothScroll` (Lenis) provider in the root layout. Don't instantiate Lenis again per component.
- **Internal navigation must use `TransitionLink`** (`src/components/shared/TransitionLink.tsx`), not `next/link`, so the column-wipe transition plays. It renders an `<a>` and calls `navigateTo(href)` from `TransitionProvider`.
  - `TransitionLink` accepts an optional `onClick`. If your handler calls `e.preventDefault()`, the built-in page transition is skipped (used by the Navbar's in-page `handleNav`).
- `TransitionProvider` (`src/providers/TransitionProvider.tsx`) drives the cover/reveal animation and performs `router.push` while the screen is covered. `PageTransition.tsx` is a separate one-shot intro loader — do not confuse the two.
- Prefer `motion` from `motion/react` for component animations. Keep `gsap` for complex timeline/scroll work.

### Component authoring
- Mark interactive/client components with `"use client"` at the top. Server components stay default.
- Use the `cn(...)` helper from `@/lib/utils` for conditional/class merging (wraps `clsx` + `tailwind-merge`).
- Keep data out of components; pull from `src/data`.
- No inline comments unless explicitly requested.

## Before writing code
1. Check `node_modules/next/dist/docs/` for the relevant Next.js API (this build differs from stock).
2. Match surrounding conventions (aliases, `"use client"`, `cn`, Tailwind v4 theme tokens).
3. For layout edits to `projectDetails/*`, preserve the tablet = desktop-layout / small-text split.
4. For navigation, use `TransitionLink`.
