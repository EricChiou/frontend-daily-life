module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 關閉斷行規則，在 windows 及 linux 中開發會有不同的斷行符號，因此關閉此規則
    'linebreak-style': ['off'],

    // 開啟多行末尾逗號規則
    'comma-dangle': ['error', 'always-multiline'],

    // code 單行最大長度建議為 100 個字
    'max-len': ['error', { 'code': 100 }],

    // 箭頭函式規則，使用 'as-needed' 規則
    'arrow-parens': ['error', 'as-needed'],

    // 禁止對函式參數再賦予值，但是對 object 內的資料可以再賦予值
    'no-param-reassign': ['error', { 'props': false }],

    // 換行時將操作符放在行末
    'operator-linebreak': ['error', 'after'],

    // 行末加上分號
    'semi': ['error', 'always'],

    // 不要有多餘的分號
    'no-extra-semi': 'error',

    // 字串使用單引號
    'quotes': ['error', 'single'],

    // Function 後的括號不要有空格
    'space-before-function-paren': ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
