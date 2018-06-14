import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import { $secondaryWhite, $secondaryRed, $primaryRed, $primaryWhite } from '../styles/styles';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const searchWord= 'animal';
const $placeHolderBlue = "#014ea5";

const boxStyles = StyleSheet.create({
  newWordBox: {
    width: 200,
    height: 50,
    textAlign: 'center',
    backgroundColor: $secondaryWhite,
    borderColor: $secondaryRed,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 24,
  },
  newSentenceBox: {
    width: 300,
    height: 200,
    textAlign: 'center',
    backgroundColor: $secondaryWhite,
    borderColor: $secondaryRed,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 24,
    flexWrap: 'wrap',
  },
});

const AddWords = ({ navigation }) => (
  <ScrollView>
  <View style={styles.container}>
    <View style={{height: 50}} />
    <Text style={styles.header}>Add new Words</Text>
    <Text style={{color: $primaryWhite, fontSize: 18, padding: 10}}>Add your own vocabulary to any category, or create a new category.</Text>
    <View style={{margin: 10}}>
      <TextInput
        placeholder="your word..."
        placeholderTextColor={$placeHolderBlue}
        style={boxStyles.newWordBox}
        />
    </View>
    <View style={{margin: 10}}>
      <TextInput
        placeholder="your sentence..."
        placeholderTextColor={$placeHolderBlue}
        style={boxStyles.newSentenceBox}
        />
    </View>
    <Text style={{margin: 10, color: 'white', fontSize: 18 }} >Suggested Image:</Text>

    <View style={styles.wordBoxEng}>
      <Image
        source={{ uri: `https://source.unsplash.com/150x150/?${searchWord}` }}
        style={styles.imageSize} 
        />
    </View>
    <View style={{margin: 10}}>
      <TextInput
        placeholder="category"
        placeholderTextColor={$placeHolderBlue}
        style={styles.answerBox}
      />
    </View>
    <View style={styles.button}>
      <Text
        style={styles.buttonText}
        onPress={() => navigation.navigate('Vocab')}
      >Add!
      </Text>
    </View>
    <View style={{height: 50}} />
  </View>
  </ScrollView>
);

AddWords.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AddWords;
