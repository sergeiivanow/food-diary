module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'env',
        path: '.env',
      },
    ],
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        root: ['./src'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
