import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["!**/.storybook", "**/node_modules"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "prettier",
), {
    plugins: {
        react,
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    rules: {
        "no-unused-expressions": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
}];