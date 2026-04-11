// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://alo-argueta.github.io
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
