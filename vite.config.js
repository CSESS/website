import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    base: "/",
    plugins: [
      legacy({
        modernPolyfills: ["es.object.group-by"],
        renderLegacyChunks: false,
      }),
      react(),
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          navigateFallbackAllowlist: [/^\/assets/],
        },
      }),
    ],
  };
});
