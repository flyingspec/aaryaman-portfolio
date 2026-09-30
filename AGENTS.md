# AGENTS.md

This file contains repo-specific guidance for OpenCode sessions. Every line below answers: "Would an agent likely miss this without help?"

## Commands

- `npm run dev` — starts Vite dev server with HMR
- `npm run build` — **must run in order**: first `tsc -b` (type-check), then `vite build`. Do not skip the tsc step or build will fail.
- `npm run lint` — runs ESLint with flat config (`eslint.config.js`). Fix errors before committing.
- `npm run preview` — serves the `dist/` folder locally to preview the production build.

## TypeScript

- Two separate tsconfigs: `tsconfig.app.json` (src/) and `tsconfig.node.json` (config files).
- Both enable `noUnusedLocals`, `noUnusedParameters`, and `verbatimModuleSyntax: true`.
- `verbatimModuleSyntax` means you must import values from their type-definition source — don't strip types from imports.

## ESLint

- Uses flat config format (`eslint.config.js`).
- Extends: `@eslint/js`, `typescript-eslint` recommended, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`.
- Ignores `dist/` via `globalIgnores`.
- No test framework is configured (`package.json` has no test script).

## Project structure

- Entry point: `src/main.tsx` renders `src/App.tsx` into `#root`.
- `src/index.css` defines CSS variables and base styles.
- Assets (images, SVGs) are in `src/assets/`.
- No `tests/` directory, no Jest/Vitest config — add your own if needed.

## Git

- `.gitignore` excludes `node_modules`, `dist/`, `*.log`, `.vscode/`, `.idea/`.
- Build output goes to `dist/` (committed? check repo policy).