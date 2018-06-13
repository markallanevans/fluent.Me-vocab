import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/styles';
import WordBox from './WordBox';
import ProgressBar from './ProgressBar';
import WordCheck from './WordCheck';
import TextButton from './TextButton';
import AnimatedCheckBox from './AnimatedCheckBox';
import StepBar from './StepBar';

class VocabReview extends React.Component {
  constructor(props) {
    super(props);
    const randCardId = Math.floor(Math.random() * props.reviewList.length);
    const word = props.reviewList[randCardId];
    this.state = {
      currentWord: '',
      isCorrect: null,
      incorrectTries: 0,
      word,
    };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
  }
  checkAnswer(userAnswer, realAnswer) {
    const correctness = (userAnswer.toLowerCase().trim() === realAnswer);
    this.setState({
      isCorrect: correctness,
    });
    if (correctness) {
      this.props.removeReviewWord(realAnswer);
      this.props.addWordPoints();
    } else {
      this.setState({
        incorrectTries: this.state.incorrectTries + 1,
      })
    }
  }

  getErrorMessage() {
    if (this.state.incorrectTries > 0 ) {
      if (this.state.incorrectTries === 3) {
        return <Text>All tries used! The correct answer was {this.state.word.word}</Text>
      }
        return <Text>Try Again!</Text>
    }
  }

  //FIXME: problem with the rendering of the word. When checkAnswer is called, it forces the image to refresh.. and changes the current word. I think this is because theAnswer causes the whole component to re-render... 

  render() {
    let animatedCheckBox = '';
    if (this.state.isCorrect === true) {
      animatedCheckBox = <AnimatedCheckBox />;
    }
    
    let wordBoxContent = '';
    if (this.props.reviewList.length === 0) {
      wordBoxContent = <Text>That is all for today!</Text>;
    } else if (this.state.isCorrect === true) {
      wordBoxContent = animatedCheckBox;
    } else {
      wordBoxContent = <WordBox word={this.state.word} />;
    }

    return (
      <View style={styles.container}>
        <View style={{ height: 150, width: 150 }}>
          {animatedCheckBox}
        </View>
        <View style={styles.boxContainer}>
          {wordBoxContent}
        </View>
        <View>
          <WordCheck
            word={this.state.word}
            isCorrect={this.state.isCorrect}
            checkAnswer={this.checkAnswer}
            id={this.state.word.id}
          />
          {this.getErrorMessage()}
          <ProgressBar progress={1 - (this.props.reviewList.length / 10)} total={1} />
          { (this.state.isCorrect || this.state.incorrectTries === 3) &&
          <TextButton text="next" navTo="VocabReview" navigation={this.props.navigation} />
          
        }
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => (
  {
    vocabList: state.vocabList,
    reviewList: state.reviewList,
    isCorrect: state.checkAnswer,
  }
);

const mapDispatchToProps = dispatch => ({
  removeReviewWord: word => dispatch({ type: 'REMOVE_REVIEW_WORD', word }),
  addWordPoints: () => dispatch({ type: 'ADD_WORD_POINTS' }),
});

VocabReview.propTypes = {
  reviewList: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(VocabReview);

