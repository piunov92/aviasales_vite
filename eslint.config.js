import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import { fixupConfigRules } from '@eslint/compat'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.jsx'],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
  },
  ...fixupConfigRules(compat.extends('plugin:react/recommended')),
  ...fixupConfigRules(compat.extends('plugin:react-hooks/recommended')),
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'react/react-in-jsx-scope': 'warn',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
