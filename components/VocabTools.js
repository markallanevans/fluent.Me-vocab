import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { addReviewWord } from '../actions';

const VocabTools = ( { id, dispatch } ) => (
  <View style={{justifyContent: 'center', flexDirection: 'row'}}>
    <Text>Tools {id} </Text>
    <TouchableHighlight
      onPress={()=> dispatch({ type: 'ADD_REVIEW_WORD', id: id})}
      >
      <Text style={{backgroundColor: 'white'}}>LEARNED!</Text>
    </TouchableHighlight>
  </View>
)

export default connect()(VocabTools);