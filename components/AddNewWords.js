import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const searchWord= 'animal';

const AddWords = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Add new Words!</Text>
    <View style={{margin: 10}}><TextInput placeholder="your word" style={styles.answerBox} /></View>
    <View style={{margin: 10}}><TextInput placeholder="your sentence" style={styles.answerBox} /></View>
    <Text style={{margin: 10, color: 'white', fontSize: 18 }} >Suggested Image:</Text>
    <Image source={{ uri: `https://source.unsplash.com/150x150/?${searchWord}` }}style={styles.imageSize} />
    <View style={{margin: 10}}><TextInput placeholder="category" style={styles.answerBox} /></View>
    <View style={styles.button}>
      <Text
        style={styles.buttonText}
        onPress={() => navigation.navigate('Vocab')}
      >Add!
      </Text>
    </View>
  </View>
);

AddWords.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AddWords;
