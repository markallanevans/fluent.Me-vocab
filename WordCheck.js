import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles/styles';

export default WordCheck = ( { answer } ) => (
  <View>
    <TextInput style={styles.answerBox}>{answer}</TextInput> {/* something here like on SubmitEditing change check answer... */}
  </View>
);
