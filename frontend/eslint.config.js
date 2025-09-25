import js from '@eslint/js'
import globals from 'globals'
import { configs as reactHooks } from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import nodePlugin from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import { importX } from 'eslint-plugin-import-x'
import * as tsParser from '@typescript-eslint/parser'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import pluginSecurity from 'eslint-plugin-security'
import noSecrets from 'eslint-plugin-no-secrets'
import { configs as sonarjs } from 'eslint-plugin-sonarjs'
import stylistic from '@stylistic/eslint-plugin'

const files = ['**/*.{js,ts,tsx}']

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files,
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      nodePlugin.configs['flat/recommended-script'],
      pluginPromise.configs['flat/recommended'],
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      comments.recommended,
      pluginSecurity.configs.recommended,
      sonarjs.recommended,
      reactHooks['recommended-latest'],
      reactRefresh.configs.vite,
      stylistic.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            '*.js',
            'commitlint.config.ts',
            '.husky/install.js',
            'vite.config.ts',
          ],
        },
      },
    },
    rules: {
      'curly': ['error', 'multi-or-nest', 'consistent'],
      'quote-props': ['error', 'consistent-as-needed'],
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-debugger': 'error',
      'no-console': 'error',
      'no-cond-assign': ['error', 'always'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'object-curly-spacing': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: true,
        },
      ],
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
        },
      ],
      'object-shorthand': [
        'error',
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: true,
        },
      ],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'template-curly-spacing': 'error',
      'generator-star-spacing': 'off',
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'consistent-return': 'error',
      'eqeqeq': ['error', 'allow-null'],
      'no-case-declarations': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-void': 'error',
      'require-await': 'error',
      'no-return-assign': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allow: [{ name: ['Error', 'URL', 'URLSearchParams'], from: 'lib' }],
          allowAny: true,
          allowBoolean: true,
          allowNullish: true,
          allowNumber: true,
          allowRegExp: true,
        },
      ],

      'promise/always-return': ['error', { ignoreLastCallback: true }],

      '@eslint-community/eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: true },
      ],

      '@stylistic/brace-style': ['error', '1tbs'],
    },
  },
  {
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/error-message': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/number-literal-case': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/throw-new-error': 'error',
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          checkShorthandImports: false,
          allowList: {
            env: true,
            args: true,
            ProcessEnv: true,
            QueryParams: true,
            getEnv: true,
            props: true,
            Params: true,
            prev: true,
            ModelArgs: true,
            AccountTypeFindManyArgsSchema: true,
            utils: true,
          },
        },
      ],
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/no-array-method-this-argument': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-empty-file': 'off',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
            kebabCase: true,
          },
        },
      ],
      'unicorn/no-array-for-each': 'off',
    },
  },
  {
    files,
    plugins: {
      'no-secrets': noSecrets,
    },
    rules: {
      'no-secrets/no-secrets': [
        'error',
        {
          additionalDelimiters: ['.', '-', '(?=[A-Z][a-z])'],
        },
      ],
    },
  },
  {
    files,
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'import-x/no-dynamic-require': 'error',
      'import-x/no-nodejs-modules': 'warn',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-unresolved': 'off',
    },
    settings: {
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import-x/resolver': {
        typescript: {
          typescript: {
            alwaysTryTypes: true,
          },
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
          },
        },
      },
    },
  },
])
