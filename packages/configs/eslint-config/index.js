module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "ramda"],
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
  overrides: [
    {
      files: ["**/*.js?(x)", "**/*.ts?(x)"],
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
            groups: [["builtin", "external"], ["sibling", "index", "parent"], "object", "type", "unknown"],
            pathGroups: [
              {
                pattern: "react",
                group: "builtin",
                position: "before",
              },
              {
                pattern: "react-dom",
                group: "builtin",
                position: "before",
              },
              {
                pattern: "react-native",
                group: "builtin",
                position: "before",
              },
              {
                pattern: "@features",
                group: "sibling",
                position: "before",
              },
              {
                pattern: "@features/**",
                group: "sibling",
                position: "before",
              },
              {
                pattern: "@components",
                group: "sibling",
                position: "before",
              },
              {
                pattern: "@components/**",
                group: "sibling",
                position: "before",
              },
              {
                pattern: "@hooks",
                group: "sibling",
                position: "before",
              },
              {
                pattern: "@hooks/**",
                group: "sibling",
                position: "before",
              },
              {
                pattern: "@libs",
                group: "sibling",
                position: "before",
              },
              {
                pattern: "@libs/**",
                group: "sibling",
                position: "before",
              },
              {
                pattern: "@shared",
                group: "sibling",
                position: "before",
              },
              {
                pattern: "@shared/**",
                group: "sibling",
                position: "before",
              },
              {
                pattern: "@/**",
                group: "sibling",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: [],
            distinctGroup: false,
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
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
}
