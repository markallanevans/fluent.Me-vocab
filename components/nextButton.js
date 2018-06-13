import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/styles';
import { $secondaryWhite } from '../styles/styles';

const nextButton = () => (
  <View style={styles.buttonWithoutWidth}>
    <Icon name="navigate-next" size={50} color={$secondaryWhite} />
  </View>
);

export default nextButton;
