import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../styles/styles';

export default TextButton = ( { text, navTo, navigation } ) => (
  <View>
    <TouchableHighlight onPress={() => navigation.push(navTo)}>
    <Text style={styles.button}>{text}</Text>
    </TouchableHighlight>
  </View>
);
