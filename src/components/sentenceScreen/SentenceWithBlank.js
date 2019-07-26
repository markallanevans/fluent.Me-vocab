import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Blank from './Blank'
import WordBox from '../WordBox'
import AnimationCheck from '../animations/AnimationCheck'
import styles, { $primaryWhite } from '../../styles/styles'

class SentenceWithBlank extends Component {
  constructor() {
    super()
    this.state = {
      isCorrect: null
    }
    this.checkAnswer = this.checkAnswer.bind(this)
  }

  componentWillMount() {
    this.props.loadSentence(this.props.currentSentenceIndex)
  }

  checkAnswer(userAnswer, realAnswer) {
    const result = userAnswer.trim().toLowerCase() === realAnswer.toString()
    if (result) {
      this.setState({
        isCorrect: result
      })
    }
  }

  render() {
    const { words, currentCategoryWords } = this.props
    const newWord = words.filter(w => currentCategoryWords.indexOf(w) !== -1)
    const wordsWithBlank = [...words]
    wordsWithBlank[words.indexOf(newWord.toString())] = '                   '
    const blanks = wordsWithBlank.map((word, index) => (
      <Blank word={word} key={index.toString()} />
    ))
    return (
      <View style={styles.centered}>
        <View>
          <WordBox
            word={{
              id: 1,
              English: newWord,
              showFront: true,
              showImage: true,
              word: newWord
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
          {blanks}
        </View>
        {this.state.isCorrect === true ? (
          <AnimationCheck onDone={() => this.setState({ isCorrect: false })} />
        ) : (
          <View />
        )}
        <TextInput
          placeholder="..."
          style={styles.answerBox}
          clearButtonMode="always"
          onSubmitEditing={e => this.checkAnswer(e.nativeEvent.text, newWord)}
        />
      </View>
    )
  }
}

SentenceWithBlank.propTypes = {
  loadSentence: PropTypes.func.isRequired,
  currentSentenceIndex: PropTypes.number.isRequired,
  currentCategoryWords: PropTypes.array.isRequired,
  words: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  sentenceStore: state.sentenceStore,
  currentSentenceIndex: state.studyStats.currentSentenceIndex,
  currentCategoryWords: state.sentenceStore.categoryWords,
  loadedCategory: state.sentenceStore.loadedCategory,
  words: state.sentenceStore.words,
  reviewList: state.sentenceStore.reviewList
})

const mapDispatchToProps = dispatch => ({
  loadSentence: () => dispatch({ type: 'LOAD_SENTENCE' })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SentenceWithBlank)
