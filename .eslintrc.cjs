module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "react/jsx-uses-react": "error",   
    "react/jsx-uses-vars": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "semi": [2, "always"],
    "indent": ["error", 2],
    "quotes": "off",
    "no-undef": "off",
    "object-shorthand": 0,
    "react/prop-types": "off",
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "react/no-unescaped-entities": "off"
  },
}
