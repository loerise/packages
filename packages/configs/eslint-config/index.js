module.exports = {
  extends: [
    "@unocss",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:ramda/recommended",
    "plugin:react-directives/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier", "ramda"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ["**/*.js?(x)", "**/*.ts?(x)"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
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
            distinctGroup: false,
            groups: [["builtin", "external"], ["sibling", "index", "parent"], "object", "type", "unknown"],
            "newlines-between": "always",
            pathGroups: [
              {
                group: "builtin",
                pattern: "react",
                position: "before",
              },
              {
                group: "builtin",
                pattern: "react-dom",
                position: "before",
              },
              {
                group: "builtin",
                pattern: "react-native",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "@features",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "@features/**",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "@components",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "@components/**",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "@hooks",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "@hooks/**",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "@libs",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "@libs/**",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "@shared",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "@shared/**",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "@/**",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: [],
          },
        ],
        "no-console": "warn",
        "no-undef": "off",
        "react-directives/no-undef": "off",
        "react/display-name": "off",
        "react/jsx-curly-brace-presence": "error",
        "react/prop-types": "off",
        "sort-imports": [
          "error",
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
          },
        ],
        "tailwindcss/classnames-order": "warn",
        "tailwindcss/enforces-negative-arbitrary-values": "error",
        "tailwindcss/no-contradicting-classname": "error",
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
