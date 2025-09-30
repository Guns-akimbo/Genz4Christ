import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// Plugin to strip "use client" directives
function stripUseClient() {
  return {
    name: "strip-use-client",
    transform(code: string) {
      // only strip if "use client" is at the top of the file
      return code.replace(/^["']use client["'];?\s*/gm, "");
    },
  };
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    stripUseClient(), // 👈 added here
  ],
  build: {
    sourcemap: false, // optional, removes sourcemap warnings
  },
});
