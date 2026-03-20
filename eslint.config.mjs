import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "script", // important for CommonJS
      },
    },
    extends: [js.configs.recommended],
    rules: {
      // optional: extra strict rules
      "no-var": "error",
      "semi": ["error", "always"],
    },
  },
]);
