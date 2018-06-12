import React from 'react';
import { View, Text } from 'react-native';
import styles, { $secondaryRed } from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { $secondaryWhite } from '../styles/styles';

const nextButton = () => (
  <View style={styles.buttonWithoutWidth}>
    <Icon name="navigate-next" size={50} color={$secondaryWhite} />
  </View>
);

export default nextButton;
