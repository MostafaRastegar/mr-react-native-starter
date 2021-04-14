module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',

  extends: [
    'plugin:react/recommended',
    'airbnb',
    'react-app',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'es5',
        semi: false,
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: true,
      },
    ],

    'import/no-absolute-path': [
      2,
      { esmodule: false, commonjs: false, amd: false },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],

    'no-unused-expressions': 'off',
    'no-nested-ternary': 'error',
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    // Allow only special identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__typename'],
      },
    ],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 'off',

    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'css-modules/no-unused-class': 'off',

    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-access-state-in-setstate': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'warning',
    'jsx-a11y/click-events-have-key-events': 'warning',
    camelcase: 'off',

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//     node: true,
//   },
//   parser: 'babel-eslint',
//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//     'react-app',
//     'prettier',
//     'prettier/flowtype',
//     'prettier/react',
//   ],
//   plugins: ['react', 'prettier'],
//   parserOptions: {
//     ecmaVersion: 2018,
//   },
//   rules: {
//     'prettier/prettier': [
//       'error',
//       {
//         printWidth: 80,
//         trailingComma: 'es5',
//         semi: false,
//         jsxSingleQuote: true,
//         singleQuote: true,
//         useTabs: true,
//       },
//     ],
//   },
// };
