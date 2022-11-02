module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:react-directives/recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "error",
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
