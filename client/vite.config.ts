import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      api: path.resolve(__dirname, "./src/api"),
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      containers: path.resolve(__dirname, "./src/containers"),
      features: path.resolve(__dirname, "./src/features"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      lib: path.resolve(__dirname, "./src/lib"),
      pages: path.resolve(__dirname, "./src/pages"),
      providers: path.resolve(__dirname, "./src/providers"),
      schemas: path.resolve(__dirname, "./src/schemas"),
      types: path.resolve(__dirname, "./src/types"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
});
