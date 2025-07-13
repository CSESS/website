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
<<<<<<< HEAD
        registerType: 'autoUpdate',
        workbox: {
          navigateFallbackAllowlist: [
            /^\/assets/
          ],
=======
        workbox: {
          navigateFallbackDenylist: [/^\/home/, /^\/api/],
>>>>>>> 498f2a02ee21ab59b35a6c36b3eb31025e79aa4a
        },
      }),
    ],
  };
});
