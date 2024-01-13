import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: "/de-wallet/",

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/styles/variables.scss";`,
      },
    },
  },
});
