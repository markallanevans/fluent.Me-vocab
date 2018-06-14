import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const TextButton = ({ text, navTo, navigation, action }) => (
  <View>
    <TouchableHighlight onPress={() => action === 'navigate' ? navigation.navigate(navTo) : navigation.push(navTo)}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  navTo: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default TextButton;
