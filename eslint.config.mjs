import pluginCypress from 'eslint-plugin-cypress/flat'

export default [
  {
    plugins: {
      cypress: pluginCypress
    },
    rules: {
      'indent': ['error', 2],
      'semi': ['error', 'never'],
      'quotes': ['error', 'single',
        { avoidEscape: true, allowTemplateLiterals: false }],
      'no-unused-vars': ['error', {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'space-infix-ops': 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'curly': ['error', 'multi-line'],
      'no-multiple-empty-lines': ['error'],
      'operator-linebreak': ['error', 'after',
        {overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],
      'one-var': ['error', { initialized: 'never' }],
      'no-cond-assign': 'error',
      'block-spacing': ['error', 'always'],
      'comma-dangle': ['error', {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }],
      'comma-style': ['error', 'last'],
      'dot-location': ['error', 'property'],
      'eol-last': 'error',
      'func-call-spacing': ['error', 'never'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'new-cap': ['error',
        { newIsCap: true, capIsNew: false, properties: true }],
      'new-parens': 'error',
      'max-len': ['error',
        { code: 100, ignoreComments: true, ignoreUrls: true }
      ]
    }
  }
]
