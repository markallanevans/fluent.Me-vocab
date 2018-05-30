import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { flipCard } from './actions';
import styles from './styles';

const WordBox = ({ word, dispatch }) => (
    <View style={styles.wordBox}>
      <TouchableHighlight
        onPress={() => dispatch({type: 'FLIP_CARD', id: word.id})}>
      <Text style={styles.vocabText}>{/*word.show === 'front' ? */
      word.English/* : word.Spanish*/}</Text>
      </TouchableHighlight>
    </View>
);

// const mapDispatchToProps = (dispatch) => {
//   return {
//   flipCard: () => dispatch(flipCard('6'))
//   }
// }

export default connect()(WordBox);

//NEXT STEP:
// 1 add a function to dispatch an action to toggle the language state from English to Spanish on tap and from English to Image on long press
// for this, in the store, each object should have a default of English in state, 
// or better yet, toggle 1, 2, 3, and in the core of the state 1, 2 and 3 can be set as specific languages.
// in the store, get all the words and pass the English word as props to the .display: key
// when the button is clicked, change the display key to the Spanish word,
// pass only the display property to the wordList and wordBox

