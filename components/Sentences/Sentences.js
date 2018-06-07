import React from 'react';
import { View } from 'react-native';
import SentenceEmpty from './SentenceEmpty';
import CheckButton from '../CheckButton';
import styles from '../../styles/styles';

const Sentences = () => (
  <View style={styles.container}>
    <SentenceEmpty />
    <CheckButton />
  </View>
);

export default Sentences;
