module.exports = {
  parser: '@typescript-eslint/parser', // 指定ESLint使用的解析器
  plugins: ['@typescript-eslint'], // 指定ESLint使用的插件
  extends: [
    'plugin:@typescript-eslint/recommended', // 使用推荐的TypeScript规则
  ],
  rules: {
    // 在这里添加或覆盖规则
    '@typescript-eslint/no-explicit-any': 'off',
    // 关闭占位符_报错
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
  },
  ignorePatterns: ['**/*.d.ts'], // 排除所有 .d.ts 文件
};
