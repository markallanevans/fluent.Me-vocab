import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VocabTools = ({ id, word, addReviewWord }) => (
  <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
    <TouchableHighlight
      onPress={() => addReviewWord(id, word)}
    >
      <Icon name="check-circle" size={20} color="#900" />
    </TouchableHighlight>
  </View>
);

VocabTools.propTypes = {
  id: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
  addReviewWord: PropTypes.func.isRequired,
};

// EXAMPLE of working dispatch for review
const mapDispatchToProps = dispatch => ({
  addReviewWord: (id, word) => dispatch({ type: 'ADD_REVIEW_WORD', id, word }),
  // addReviewWord: id => addReviewWord(dispatch, id)
});

export default connect(null, mapDispatchToProps)(VocabTools);
