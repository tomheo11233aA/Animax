module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      "module-resolver",
      {
        "alias": {
          "@redux": "./src/redux",
          "@hooks": "./src/hooks",
          "@utils": "./src/utils",
          "@models": "./src/models",
          "@themes": "./src/themes",
          "@screens": "./src/screens",
          "@slice": "./src/redux/slice",
          "@services": "./src/services",
          "@contants": "./src/contants",
          "@images": "./src/assets/images",
          "@reuse": "./src/components/reuse",
          "@lotties": "./src/assets/lotties",
          "@selector": "./src/redux/selector",
          "@navigations": "./src/navigations",
          "@common": "./src/components/common",
          "@asyncThunk": "./src/redux/asyncThunk",
          '@helper': './src/helper',
          '@function': './src/function',
        }
      }
    ],
    ["module:react-native-dotenv", {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
    }]
  ]
};
