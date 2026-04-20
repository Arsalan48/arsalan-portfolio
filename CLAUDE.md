# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

No test runner is configured.

## Architecture

React 19 + Vite 8 single-page app. JavaScript (JSX), no TypeScript.

**Entry flow:** `index.html` → `src/main.jsx` (ReactDOM.createRoot) → `src/App.jsx`

**Styling system:** `src/index.css` defines CSS custom properties for theming (light/dark via `prefers-color-scheme`). Component styles live in `src/App.css` using modern CSS nesting. `public/icons.svg` is a sprite sheet referenced via `<use href>` throughout the app.

**ESLint config** uses the flat config format (ESLint 9+). Unused vars are allowed when named `^[A-Z_]`.
