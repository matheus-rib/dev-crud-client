const { ESLINT_MODES } = require('@craco/craco')

module.exports = {
  babel: {
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            '@': './src',
          },
        },
      ],
    ],
  },
  eslint: {
    mode: ESLINT_MODES.extends,
  },
}
