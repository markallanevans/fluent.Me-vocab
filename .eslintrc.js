module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-native', 'flowtype', 'prettier', 'airbnb'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/forbid-prop-types': 0
  }
}
