import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  preview: {
    host: "0.0.0.0",
    port: 19132
  },
  build: {
    target: "esnext",
  },
});
