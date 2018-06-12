import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VocabTools = ({ id, word, addReviewWord, reviewList }) => (
  <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
    <TouchableHighlight
      onPress={() => addReviewWord(id, word, reviewList)}
    >
      <Icon name="check-circle" size={20} color="#900" />
    </TouchableHighlight>
  </View>
);
//TODO: review why here I had to remove parenthese around the function.
const addReviewWord = (id, word, reviewList) => dispatch => {

  //FIXME: why doesn't this work?
  console.log(reviewList.indexOf(reviewList.id));
  if (reviewList.indexOf(id) === -1) {
   dispatch({ type: 'ADD_REVIEW_WORD', id, word });
  }
  return;
}

VocabTools.propTypes = {
  id: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
  addReviewWord: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  reviewList: state.reviewList,
})
// EXAMPLE of working dispatch for review
const mapDispatchToProps = dispatch => ({
  // addReviewWord: (id, word) => dispatch({ type: 'ADD_REVIEW_WORD', id, word }),
  addReviewWord: (id, word, reviewList) => dispatch(addReviewWord(id, word, reviewList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VocabTools);
