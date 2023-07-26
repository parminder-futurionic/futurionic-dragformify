import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "@futurionicmanu/react-dnd-kit",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts()],
});