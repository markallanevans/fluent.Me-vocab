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

class VocabReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: '',
      isCorrect: null,
    };
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  checkAnswer(userAnswer, realAnswer) {
    const correctness = (userAnswer.toLowerCase().trim() === realAnswer);
    this.setState({
      isCorrect: correctness,
    });
    if (correctness === true) {
      this.props.removeReviewWord(realAnswer);
      this.props.addWordPoints();
    }
  }

  //FIXME: problem with the rendering of the word. When checkAnswer is called, it forces the image to refresh.. and changes the current word. I think this is because theAnswer causes the whole component to re-render... 

  render() {
    const randCardId = Math.floor(Math.random() * this.props.reviewList.length);
    let animatedCheckBox = '';
    if (this.state.isCorrect === true) {
      animatedCheckBox = <AnimatedCheckBox />;
    }
    const word = this.props.reviewList[randCardId];
    
    let wordBoxContent = '';
    if (this.props.reviewList.length === 0) {
      wordBoxContent = <Text>That is all for today!</Text>;
    } else if (this.state.isCorrect === true) {
      wordBoxContent = animatedCheckBox;
    } else {
      wordBoxContent = <WordBox word={word} />;
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
            word={word}
            isCorrect={this.state.isCorrect}
            checkAnswer={this.checkAnswer}
            id={randCardId}
          />
          <ProgressBar progress={1 - (this.props.reviewList.length / 10)} total={1} />
          <TextButton text="next" navTo="VocabReview" navigation={this.props.navigation} />
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

