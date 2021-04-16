module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'source',
        },
      ],
    ],
    env: {
      production: {
        plugins: [
          'babel-plugin-root-import',
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'source',
          },
        ],
      },
    },
  };
};
