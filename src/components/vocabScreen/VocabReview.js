import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles, { $primaryWhite } from '../../styles/styles'
import WordBox from '../WordBox'
import ProgressBar from '../ProgressBar'
import WordCheck from '../WordCheck'
import NavButton from '../buttons/NavButton'
import AnimatedThumbsUp from '../animations/AnimationThumbUp'

class VocabReview extends React.Component {
  constructor(props) {
    super(props)
    const randCardId = Math.floor(Math.random() * props.reviewList.length)
    const word = props.reviewList[randCardId]
    this.state = {
      isCorrect: null,
      incorrectTries: 0,
      word
    }
    this.checkAnswer = this.checkAnswer.bind(this)
    this.getErrorMessage = this.getErrorMessage.bind(this)
  }

  getErrorMessage() {
    if (this.state.incorrectTries > 0) {
      if (this.state.incorrectTries === 2) {
        return (
          <Text
            style={{
              color: $primaryWhite,
              fontSize: 18,
              textAlign: 'center'
            }}>
            Oops! It&apos;s: {this.state.word.word}. Better Luck Next Time!
          </Text>
        )
      }
      return (
        <Text
          style={{
            color: $primaryWhite,
            fontSize: 18,
            textAlign: 'center'
          }}>
          Try Again!
        </Text>
      )
    }
    return null
  }

  checkAnswer(userAnswer, realAnswer) {
    const correctness = userAnswer.toLowerCase().trim() === realAnswer
    this.setState({
      isCorrect: correctness
    })
    if (correctness) {
      this.props.removeReviewWord(realAnswer)
      this.props.addWordPoints()
    } else {
      this.setState({
        incorrectTries: this.state.incorrectTries + 1
      })
    }
  }
  /* FIXME: problem with the rendering of the word.
   * When checkAnswer is called, it forces the image to refresh..
   * and changes the current word. I think this is because theAnswer
   * causes the whole component to re-render...
   */

  render() {
    let animatedCheckBox = ''
    if (this.state.isCorrect === true) {
      animatedCheckBox = (
        <View style={{ height: 150, width: 150 }}>
          <AnimatedCheckBox />
        </View>
      )
    }

    let wordBoxContent = ''
    if (this.props.reviewList.length === 0) {
      wordBoxContent = (
        <View>
          <View style={{ height: 150, width: 150, alignSelf: 'center' }}>
            <AnimatedThumbsUp />
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 24
            }}>
            You&apos;ve Finished Your Review! On to the Sentences for more
            practice!
          </Text>
        </View>
      )
    } else if (this.state.isCorrect === true) {
      wordBoxContent = animatedCheckBox
    } else {
      wordBoxContent = (
        <View style={{ marginBottom: 40 }}>
          <WordBox word={this.state.word} />
        </View>
      )
    }

    const nextScreen =
      this.props.reviewList.length > 0 ? 'VocabReview' : 'Sentences'

    return (
      <View style={styles.container}>
        <View style={styles.reviewContainer}>{wordBoxContent}</View>
        <View>
          <WordCheck
            word={this.state.word}
            isCorrect={this.state.isCorrect}
            checkAnswer={this.checkAnswer}
            id={this.state.word.id}
          />
          {this.getErrorMessage()}
          <ProgressBar
            progress={1 - this.props.reviewList.length / 10}
            total={1}
          />
          {(this.state.isCorrect || this.state.incorrectTries === 2) && (
            <NavButton
              text="next"
              navTo={nextScreen}
              navigation={this.props.navigation}
              action={nextScreen === 'VocabReview' ? 'push' : 'navigate'}
            />
          )}
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  vocabList: state.vocabList,
  reviewList: state.reviewList,
  isCorrect: state.checkAnswer
})

const mapDispatchToProps = dispatch => ({
  removeReviewWord: word => dispatch({ type: 'REMOVE_REVIEW_WORD', word }),
  addWordPoints: () => dispatch({ type: 'ADD_WORD_POINTS' })
})

VocabReview.propTypes = {
  reviewList: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  removeReviewWord: PropTypes.func.isRequired,
  addWordPoints: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VocabReview)
