import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { flipCard, toggleImage } from '../redux/actions';
import VocabTools from './VocabTools';
import styles from '../styles/styles';

const WordBox = ({ word, dispatch }) => (
  <View>
    <View style={word.showFront ? styles.wordBoxEng : styles.wordBoxEsp}>
      <TouchableHighlight
        onPress={() => dispatch({type: 'FLIP_CARD', id: word.id})}
        onLongPress={() => dispatch({type: 'TOGGLE_IMAGE', id: word.id})}>
      <View style={styles.flashBox}>
      {
      !word.showImage ?
        <Text style={styles.vocabText}>{word.showFront ? 
        word.English : word.Spanish}</Text>
      :
        <Image source={{uri: `https://source.unsplash.com/150x150/?${word.English}`}} style={{width: 150, height: 150}}/>
      }
      </View>
      </TouchableHighlight>
    </View>
  </View>
);

export default connect()(WordBox);

/*
MaterialIcons from react-native-vector-icons 
https://oblador.github.io/react-native-vector-icons/

'check-circle' would be good as an icon in the lower-right corner of the flashCard to show hold when ready to learn new word.
instead of the current solution of toggling the whole box, perhaps a little toggle buttin in the upper right corner of the text view would be good for switching languages

*/