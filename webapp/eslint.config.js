import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  },
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  reactPlugin.configs.flat['jsx-runtime'],
  unicorn.configs.recommended,
  {
    ...importPlugin.flatConfigs.recommended,
    files: ['**/*.{ts,tsx}'],
    settings: {
      'import/resolver': {
        node: true,
        typescript: true
      }
    }
  },
  perfectionist.configs['recommended-natural'],
  prettierPlugin
)
