# Pixel Sidescroller Portfolio

A portfolio site that plays like a 2D sidescroller: walk a pixel-art avatar across a parallax world, visit project "buildings," and read About/Contact signposts — all client-side, no backend required.

## Features

- Pixel-art avatar with a walk-cycle animation, driven by arrow keys / WASD
- Camera that pans and clamps as you walk across a wide world
- Parallax background (sky, drifting clouds, two layers of hills, tiled ground)
- Project landmarks rendered as buildings with doors; walking up and pressing the interact key opens the deployed project in a new tab
- About/Contact landmarks rendered as signposts that open a dialog panel
- Mobile touch controls (on-screen d-pad) on touch devices
- TanStack Start + React 19 + Tailwind CSS v4 + Biome

## Project Structure

```
apps/
  web/                          # TanStack Start frontend application
    src/components/game/        # Scene, movement, landmarks, sprites
    src/routes/                 # File-based routes (single page: index)
packages/
  ui/                           # Shared React components (shadcn/ui)
  logger/                       # Shared logging utilities
  tsconfig/                     # Shared TypeScript configurations
```

## Getting Started

### Prerequisites

- Node.js 22+
- Bun 1.2+

### Setup

```bash
bun install
cp apps/web/env.example apps/web/.env
bun run dev
```

Visit http://localhost:3000

## Development

```bash
bun run dev                          # Start the dev server
bun --filter @starter/web typecheck  # Type check
bunx biome check --write .           # Lint and format
bun run test                         # Run tests
```

## Editing content

Project links, About/Contact copy, and landmark placement all live in
[`apps/web/src/components/game/landmarks.ts`](apps/web/src/components/game/landmarks.ts).
Swap the placeholder `url` fields with your deployed project URLs, and replace
the placeholder `body` copy on the About/Contact entries with your own.

## Deployment

Railway-ready via the included `Dockerfile` and `railway.toml` — this is a
static, backend-less app, so no database or auth environment variables are
required at deploy time.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | TanStack Start |
| Styling | Tailwind CSS v4 |
| Build | Vite + Nitro |
| Package Manager | Bun |
| Linting | Biome |

## License

MIT
