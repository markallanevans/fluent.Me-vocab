import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { addReviewWord } from '../redux/actions';
import Icon from 'react-native-vector-icons/MaterialIcons'


const VocabTools = ( { id, dispatch } ) => (
  <View style={{justifyContent: 'center', flexDirection: 'row'}}>
    <TouchableHighlight
      onPress={()=> dispatch({ type: 'ADD_REVIEW_WORD', id: id})}
      >
      <Icon name="check-circle" size={20} color="#900" />
    </TouchableHighlight>
  </View>
)

export default connect()(VocabTools);