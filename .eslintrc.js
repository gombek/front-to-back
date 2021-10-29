module.exports = {
  include: ["./packages/**/*"],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: ['./tsconfig.json', './packages/*/tsconfig.json'], 
      tsconfigRootDir: __dirname, 
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'react',
    'react-hooks',
    'workspaces',
  ],
  "settings": {
    "version": 'detect',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:workspaces/recommended',
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  env: {
    node: true,
    es2021: true,
  },
  overrides: [
    {
      files: [ "./packages/web-client/**/*", "./packages/shared/**/*" ],
      extends: [
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
      ],
      env: {
        browser: true
      },
    },
    {
      "files": [ "./**/*.test.*", "./**/*.spec.*" ],
      "extends": [
        'plugin:jest/recommended',
      ],
      "env": {
        "jest": true
      }
    }
  ]
};
