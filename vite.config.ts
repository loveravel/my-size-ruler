import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000, // или ваш порт
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), svgr()],
});
