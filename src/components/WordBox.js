import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Image from 'react-native-image-progress'
import ProgressPie from 'react-native-progress/Pie'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from '../styles/styles'
import { Colors } from '../styles/theme/'

const WordBox = ({ word, flipCard, addReviewWord, reviewList }) => (
  <View>
    <View style={word.showFront ? styles.wordBoxEng : styles.wordBoxEsp}>
      <TouchableHighlight
        onPress={() => flipCard(word.id)}
        onLongPress={() => addReviewWord(word.id, word.English, reviewList)}>
        <View style={styles.flashBox}>
          {!word.showImage ? (
            <Text style={styles.vocabText}>
              {word.showFront ? word.English : word.Spanish}
            </Text>
          ) : (
            <Image
              source={{
                uri: `https://source.unsplash.com/150x150/?${word.English}`
              }}
              style={styles.imageSize}
              indicator={ProgressPie}
              indicatorProps={{
                size: 150,
                color: Colors.$primaryRed,
                borderWidth: 0
              }}
            />
          )}
        </View>
      </TouchableHighlight>
    </View>
  </View>
)

WordBox.propTypes = {
  word: PropTypes.object.isRequired,
  flipCard: PropTypes.func.isRequired,
  addReviewWord: PropTypes.func.isRequired,
  reviewList: PropTypes.array.isRequired
}

const addReviewWord = (id, word, reviewList) => dispatch => {
  if (reviewList.indexOf(id) === -1) {
    dispatch({ type: 'ADD_REVIEW_WORD', id, word })
  }
}

const flipCard = id => dispatch => {
  dispatch({ type: 'TOGGLE_IMAGE', id })
}

const mapStateToProps = state => ({
  reviewList: state.reviewList,
  dispatch: state.dispatch
})

const mapDispatchToProps = dispatch => ({
  addReviewWord: (id, word, reviewList) =>
    dispatch(addReviewWord(id, word, reviewList)),
  flipCard: id => dispatch(flipCard(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordBox)
