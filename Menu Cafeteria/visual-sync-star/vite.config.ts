// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages: se activa solo en el workflow (GITHUB_PAGES=true). En local y en
// Lovable todo sigue igual. Genera un sitio estático (SPA) bajo /Coffee-House-Menu/.
const isPages = process.env.GITHUB_PAGES === "true";
const base = isPages ? "/Coffee-House-Menu/" : "/";

export default defineConfig({
  ...(isPages ? { nitro: { preset: "github-pages" } } : {}),
  vite: {
    base,
    // Prebundle the menu dependencies together with React before the first render.
    // Late discovery can mix old and new optimized modules during an HMR reload,
    // leaving Radix Slot with a different React hook dispatcher from ReactDOM.
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@radix-ui/react-slot",
        "class-variance-authority",
        "clsx",
        "lucide-react",
        "tailwind-merge",
      ],
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isPages
      ? {
          router: { basepath: "/Coffee-House-Menu" },
          spa: { enabled: true, prerender: { outputPath: "/index", crawlLinks: false } },
        }
      : {}),
  },
});
