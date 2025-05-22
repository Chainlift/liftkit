import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import css from "@eslint/css";
import json from "@eslint/json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Ignore non-JS files for JS/TS rules
  {
    ignores: ["**/*.css", "**/*.scss"]
  },

  // JavaScript/TypeScript configuration
  ...compat.config({
    extends: [
      "next",
      "next/typescript",
      "prettier",
      "next/core-web-vitals",
      "plugin:jsx-a11y/recommended",
    ],
  }),

  // CSS configuration
  {
    files: ["**/*.css"],
    plugins: {
      css
    },
    language: "css/css",
    rules: {
      ...css.configs.recommended.rules
    }
  },

  // JSON configuration
  {
    files: ["**/*.json"],
    plugins: {
      json
    },
    language: "json/json",
    rules: {
      ...json.configs.recommended.rules
    }
  }
];

export default eslintConfig;
