import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"), // Ensure correct entry point
      fileName: "index", // Output file name without extension
      formats: ["es"], // Add "cjs" if needed
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Mark React as external
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: false, // Disable source maps; enable for debugging if needed
    emptyOutDir: true, // Ensure the output directory is cleared before building
    minify: "esbuild", // Use esbuild for faster minification
  },
  plugins: [
    react(), // React plugin with SWC for fast builds
    dts({
      insertTypesEntry: true, // Generate `index.d.ts` in `dist`
      // outDir: 'dist/types', // Specify the output directory for types
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Optional alias for cleaner imports
    },
  },
});
