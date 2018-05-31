import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/styles';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to fluent.Me</Text>
        <Text 
          style={styles.button}
          onPress={() => this.props.navigation.navigate('NewVocab')}>get Started!</Text>
      </View>
    );
  }
}

