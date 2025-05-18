import Unfonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tsconfigPaths(),
    svgr(),
    Unfonts({
      // Google Fonts API V2
      google: {
        preconnect: false,
        preconnectUrl: "https://fonts.gstatic.com",
        fontBaseUrl: "https://fonts.googleapis.com/css2",
        display: "block",
        injectTo: "head-prepend",

        families: [
          {
            name: "Inter",
            styles: "ital,opsz,wght@0,14..32,100..900;1,14..32,100..900",
            defer: true,
          },
          {
            name: "Geologica",
            styles: "wght@100..900",
            defer: true,
          },
        ],
      },
    }),
  ],
});
