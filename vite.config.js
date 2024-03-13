/// <reference types="vitest" />
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  test: {
    globals: true,
  },
});
