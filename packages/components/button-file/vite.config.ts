import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    minify: false,
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, "src", "index.tsx"),
      fileName: (ext) => `buttonFile.${ext}.js`,
      name: "buttonFile", // the name must be set for UMD modules
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    target: "modules",
    sourcemap: true,
  },
});
