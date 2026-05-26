// eslint.config.js
import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node, // Говорим, что пишем под Node.js
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module', // Включаем поддержку import/export
      },
    },
  },
  pluginJs.configs.recommended, // Включаем стандартные рекомендованные правила
];
