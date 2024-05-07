module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-directives/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:ramda/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "ramda", "prettier"],
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
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "import/no-commonjs": "off",
        "import/no-named-as-default": "off",
        "import/no-unresolved": "off",
        "import/order": [
          "error",
          {
            distinctGroup: false,
            groups: [
              ["builtin", "external"],
              ["internal", "parent", "sibling", "index"],
              ["object", "type", "unknown"],
            ],
            "newlines-between": "always",
            pathGroups: [
              {
                group: "external",
                pattern: "react",
                position: "before",
              },
              {
                group: "external",
                pattern: "react-dom",
                position: "before",
              },
              {
                group: "external",
                pattern: "react-native",
                position: "before",
              },
              {
                group: "external",
                pattern: "@tarojs/{taro,components,**}",
                position: "before",
              },
              {
                group: "external",
                pattern: "@antmjs/{vantui,**}",
                position: "before",
              },
              {
                group: "external",
                pattern: "@tanstack/{react-query,**}",
                position: "before",
              },
              {
                group: "external",
                pattern: "?(@)react-*",
                position: "before",
              },
              {
                group: "external",
                pattern: "?(@)react-*/**",
                position: "before",
              },
              {
                group: "external",
                pattern: "?(@)react-native-*",
                position: "before",
              },
              {
                group: "external",
                pattern: "?(@)react-native-*/**",
                position: "before",
              },
              {
                group: "external",
                pattern: "@loerise/{hooks,**}",
                position: "before",
              },
              {
                group: "external",
                pattern: "ramda",
                position: "before",
              },
              {
                group: "internal",
                pattern: "@features",
                position: "before",
              },
              {
                group: "internal",
                pattern: "@pages",
                position: "before",
              },
              {
                group: "internal",
                pattern: "@components",
                position: "before",
              },
              {
                group: "internal",
                pattern: "@hooks",
                position: "before",
              },
              {
                group: "internal",
                pattern: "@libs",
                position: "before",
              },
              {
                group: "internal",
                pattern: "@shared",
                position: "before",
              },
              {
                group: "internal",
                pattern: "@/**",
                position: "before",
              },
              {
                group: "parent",
                pattern: "../**",
                position: "before",
              },
              {
                group: "sibling",
                pattern: "./**",
                position: "before",
              },
              {
                group: "type",
                pattern: "@/global",
                position: "after",
              },
            ],
            pathGroupsExcludedImportTypes: [],
          },
        ],
        "no-console": "warn",
        "no-undef": "warn",
        "no-unused-vars": "warn",
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
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
}
