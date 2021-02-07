module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '~/': '/src/*',
          '~/components': './src/components',
          '~/pages': './src/pages',
          '~/services': './src/services',
          '~/utils': './src/utils',
          '~/styles': './src/styles',
        },
      },
    ],
    ['styled-components', { ssr: true }],
  ],
};
