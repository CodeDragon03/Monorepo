/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */

const config = {
  '*.{js,jsx,ts,tsx}': 'prettier --write',
};

export default config;
