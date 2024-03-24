import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/Assets"),
      "@components": path.resolve(__dirname, "./src/Components"),
      "@style": path.resolve(__dirname, "./src/Style"),
      "@type": path.resolve(__dirname, "./src/Types"),
      "@services": path.resolve(__dirname, "./src/Services"),
      "@context": path.resolve(__dirname, "./src/Context"),
      "@pages": path.resolve(__dirname, "./src/Pages"),
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://www:80",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ""),
      },
    },
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // you can replace this port with any port
  },
});
