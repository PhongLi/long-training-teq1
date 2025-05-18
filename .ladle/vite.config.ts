import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    base: "/",
    plugins: [svgr()],
    server: {
      open: false,
    },
    resolve: {},
  });
};
