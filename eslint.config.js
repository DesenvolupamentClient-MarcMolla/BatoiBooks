import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.browser },
    files: ["**/*.js"],
    rules: {
      "prefer-const": "warn",
    },
  },
  pluginJs.configs.recommended,
];
