module.exports = {
  root: true,
  env: {
      node: true
  },
  extends: [
      // "plugin:@typescript-eslint/recommended", // 这个推荐打开，更加细致的检查ts文件的问题，后期开启再调整
      'plugin:vue/essential',
      '@vue/airbnb',
      '@vue/typescript'
  ],
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      indent: ['error', 4],
      'comma-dangle': ['error', 'never'],
      'no-plusplus': 0,
      'no-param-reassign': 0,
      'consistent-return': 0,
      'max-len': 0, /*['warn', {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreRegExpLiterals: true,
          ignoreTrailingComments: true
      }]*/
      'import/extensions': ['error', 'ignorePackages', {
          js: 'never',
          json: 'always',
          '.ts': 'always'
      }],
      'prefer-destructuring': 0,
      'class-methods-use-this': 0,
      'default-case': 0,
      'no-bitwise': 0,
      'no-continue': 0,
      'no-script-url': 0,
      'no-underscore-dangle': 0,
      "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }], // 其实不建议关闭，为了iView的部分组件才关闭
      "camelcase": 0,
      'import/prefer-default-export':0,
      'import/no-duplicates': 0,
      'vue/no-unused-vars': 0, // 开启这个有bug，对于<Col>这种标签用的时候检查结果不对
      'no-restricted-syntax': 0,
      'arrow-body-style': 0,
      'linebreak-style': ["off", "windows"]
  },
  parserOptions: {
      parser: '@typescript-eslint/parser'
  },
  globals: {
    lo: true
  },
};
