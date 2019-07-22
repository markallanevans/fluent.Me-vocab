import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons'

const VocabTools = ({ id, word, addReviewWord, reviewList }) => (
  <View
    style={{
      justifyContent: 'center',
      flexDirection: 'row'
    }}>
    <TouchableHighlight onPress={() => addReviewWord(id, word, reviewList)}>
      <MaterialIcons name="check-circle" size={20} color="#900" />
    </TouchableHighlight>
  </View>
)

const addReviewWord = (id, word, reviewList) => dispatch => {
  if (reviewList.indexOf(id) === -1) {
    dispatch({ type: 'ADD_REVIEW_WORD', id, word })
  }
}

VocabTools.propTypes = {
  id: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
  addReviewWord: PropTypes.func.isRequired,
  reviewList: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  reviewList: state.reviewList
})

const mapDispatchToProps = dispatch => ({
  addReviewWord: (id, word, reviewList) =>
    dispatch(addReviewWord(id, word, reviewList))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VocabTools)
