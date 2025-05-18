import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
      target: ["es6"],
    },
    base: "/",
    plugins: [
      react(),
      VitePWA({
        workbox: {
          navigateFallbackDenylist: [/^\/home/],
        },
      }),
    ],
  };
});
