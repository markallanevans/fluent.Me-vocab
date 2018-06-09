import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VocabTools = ({ id, addReviewWord }) => (
  <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
    <TouchableHighlight
      onPress={() => addReviewWord(id)}
    >
      <Icon name="check-circle" size={20} color="#900" />
    </TouchableHighlight>
  </View>
);

VocabTools.propTypes = {
  id: PropTypes.string.isRequired,
  addReviewWord: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addReviewWord: id => dispatch({ type: 'ADD_REVIEW_WORD', id }),
  // addReviewWord: id => addReviewWord(dispatch, id)
});

export default connect(null, mapDispatchToProps)(VocabTools);
