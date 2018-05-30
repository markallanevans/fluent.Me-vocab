import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { flipCard, showImage } from './actions';
import styles from './styles';

const WordBox = ({ word, dispatch }) => (
    <View style={word.showFront ? styles.wordBoxEng : styles.wordBoxEsp}>
      <TouchableHighlight
        onPress={() => dispatch({type: 'FLIP_CARD', id: word.id})}
        onLongPress={() => dispatch({type: 'SHOW_IMAGE', id: word.id})}>
      {
      !word.showImage ?
        <Text style={styles.vocabText}>{word.showFront ? 
        word.English : word.Spanish}</Text>
      :
        <Image source={{uri: `https://source.unsplash.com/150x150/?${word.English}`}} style={{width: 150, height: 150}}/>
      }
      </TouchableHighlight>
    </View>
);

export default connect()(WordBox);


<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 400, height: 400}} />