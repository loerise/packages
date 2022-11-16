module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:ramda/recommended",
    "plugin:react-directives/recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-var-requires": "off",
    "import/dynamic-import-chunkname": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], ["index", "sibling", "parent"], "object", "type"],
        pathGroups: [
          {
            pattern: "@app/**",
            group: "external",
            position: "after",
          },
        ],
        alphabetize: {
          order: "ignore",
        },
        "newlines-between": "always",
      },
    ],
    "no-console": "warn",
    "no-undef": "off",
    "react-directives/no-undef": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "tailwindcss/no-custom-classname": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
