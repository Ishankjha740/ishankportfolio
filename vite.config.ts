import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

import { cloudflare } from "@cloudflare/vite-plugin";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react(), ...(isDev ? [componentTagger()] : []), cloudflare()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },

    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },

  build: {
    outDir: "dist",
  },
});