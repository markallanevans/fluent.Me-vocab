import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const TextButton = ({ text, navTo, navigation }) => (
  <View>
    <TouchableHighlight onPress={() => navigation.push(navTo)}>
      <Text style={styles.button}>{text}</Text>
    </TouchableHighlight>
  </View>
);

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  navTo: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default TextButton;
