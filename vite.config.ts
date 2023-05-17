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
      context: path.resolve(__dirname, "./src/context"),
      features: path.resolve(__dirname, "./src/features"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      types: path.resolve(__dirname, "./src/types"),
      utils: path.resolve(__dirname, "./src/utils"),
      pages: path.resolve(__dirname, "./src/pages"),
      providers: path.resolve(__dirname, "./src/providers"),
      routes: path.resolve(__dirname, "./src/routes"),
      components: path.resolve(__dirname, "./src/components"),
    },
  },
});
