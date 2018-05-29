import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default WordBox = ({word}) => (
    <View style={styles.box}>
      <Text style={styles.vocabText}>{word}</Text>
    </View>
);

