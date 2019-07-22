module.exports = (api) => {
    api.cache(true)
  
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        '@babel/plugin-transform-runtime',
        //TODO: Temporarily remove below until fixing related bug
        // '@babel/plugin-proposal-class-properties',
      ].map(require.resolve),
    }
  }