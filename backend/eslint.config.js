/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import globals from 'globals'
import js from '@eslint/js'
import tseslint, { configs } from 'typescript-eslint'
import nodePlugin from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import eslintPluginImportX from 'eslint-plugin-import-x'
import tsParser from '@typescript-eslint/parser'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import pluginSecurity from 'eslint-plugin-security'
import noSecrets from 'eslint-plugin-no-secrets'
import { configs as sonarjs } from 'eslint-plugin-sonarjs'
import stylistic from '@stylistic/eslint-plugin'

const extensions = ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}']

export default tseslint.config(
  {
    ignores: [
      '**/schemas.d.ts',
      '**/.node_modules',
      '**/dist',
      '**/cache',
      '**/build',
      '**/node_modules/**/*',
      '**/prisma/**/generated',
      '**/prisma/**/zod-schemas',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
        ...globals.es2024,
      },
      parserOptions: {
        projectService: true,
      },
    },
  },
  js.configs.recommended,
  {
    files: extensions,
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
    },
  },
  configs.strictTypeChecked,
  {
    files: extensions,
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  nodePlugin.configs['flat/recommended-script'],
  pluginPromise.configs['flat/recommended'],
  {
    files: extensions,
    rules: {
      'promise/always-return': ['error', { ignoreLastCallback: true }],
    },
  },
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  {
    files: extensions,
    ignores: ['eslint.config.js'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'import-x/no-dynamic-require': 'error',
      'import-x/no-nodejs-modules': 'off',
    },
  },
  {
    files: extensions,
    rules: {
      'n/no-extraneous-import': [
        'error',
        {
          allowModules: ['@commitlint/types'],
        },
      ],
      'n/no-missing-import': [
        'error',
        {
          allowModules: ['dayjs'],
        },
      ],
    },
  },
  comments.recommended,
  {
    files: extensions,
    rules: {
      '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
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
      'unicorn/no-array-instanceof': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/number-literal-case': 'error',
      'unicorn/prefer-exponentiation-operator': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-starts-ends-with': 'error',
      'unicorn/prefer-text-content': 'error',
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
    files: extensions,
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
  pluginSecurity.configs.recommended,
  {
    files: extensions,
    rules: {
      'security/detect-object-injection': 'off',
    },
  },
  sonarjs.recommended,
  {
    files: extensions,
    rules: {
      'sonarjs/no-duplicate-string': [
        'error',
        {
          ignoreStrings: [
            'content-manager',
            'content-type-builder',
            'MM-DD-YYYY',
            'DD-MM-YYYY',
            'DD MMM, YYYY',
            'YYYY-MM-DD',
            'YYYY-MM-DD HH:mm:ss',
            'application/json',
            'text/plain',
            'generic.messageDataDefault',
            'generic.notFoundInfo',
            'generic.updateInfo',
            'generic.deleteInfo',
            'generic.createSuccess',
            'generic.uploadFileSuccess',
            'error.errorTry',
            'schema.structure_column',
            'schema.require_column',
            'error.checkPrivileges',
            'error.notFoundPrivileges',
            'error.methodNotsupported',
          ].join(','),
        },
      ],
    },
  },
  // eslint-disable-next-line import-x/no-named-as-default-member
  stylistic.configs['recommended-flat'],
  {
    files: extensions,
    rules: {
      '@stylistic/brace-style': ['error', '1tbs'],
    },
  },
)
