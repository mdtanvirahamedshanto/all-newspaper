# Contributing to All Newspaper

Thanks for your interest in contributing!

## Code of Conduct

By participating, you agree to follow `CODE_OF_CONDUCT.md`.

## Development setup

### Prerequisites

- Node.js (LTS recommended)
- pnpm
- Expo Go (optional, for device testing)

### Install

```bash
pnpm install
```

### Run

```bash
pnpm start
```

### Lint / format

```bash
pnpm lint
pnpm format
```

## Branching and commits

- Create a feature branch from `main`
- Use clear commit messages (imperative tense is preferred)

## Pull request checklist

- The app runs on device/emulator
- `pnpm lint` passes
- New/changed UI is tested on Android (and iOS if possible)
- If you add a new dependency, explain why in the PR description

## What to work on

- Add more Bangladesh newspapers (verify URLs)
- Improve UX (loading states, offline handling, reader mode)
- Accessibility (labels, focus order, contrast)
- Performance improvements (image caching, list virtualization)



