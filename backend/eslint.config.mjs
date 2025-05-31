import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
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
    }
  },
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
