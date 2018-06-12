import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const Login = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Welcome to fluent.Me</Text>
    <Text
      style={styles.button}
      onPress={() => navigation.navigate('Vocab')}
    >get Started!
    </Text>
  </View>
);

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
