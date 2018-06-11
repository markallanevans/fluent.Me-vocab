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
      isCorrect: null,
    };
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  checkAnswer(userAnswer, realAnswer) {
    const correctness = (userAnswer.toLowerCase().trim() === realAnswer);
    this.setState({
      isCorrect: correctness,
    });
    (correctness === true) && this.props.removeReviewWord(realAnswer);
  }

  render() {
    const randCardId = Math.floor(Math.random() * this.props.reviewList.length);
    let animatedCheckBox = '';
    if (this.state.isCorrect === true) {
      animatedCheckBox = <AnimatedCheckBox />;
    }
    const word = this.props.reviewList[randCardId];

    return (
      <View style={styles.container}>
        <View style={{ height: 100, width: 100 }}>
          {animatedCheckBox}
        </View>
        <View style={styles.boxContainer}>
          {this.props.reviewList.length === 0 ? <Text>That is all for today!</Text>
          : <WordBox word={word} />}
        </View>
        <WordCheck
          word={this.props.reviewList[randCardId]}
          isCorrect={this.state.isCorrect}
          checkAnswer={this.checkAnswer}
          id={randCardId}
        />
        <ProgressBar progress={1 - (this.props.reviewList.length / 10)} total={1} />
        <TextButton text="next" navTo="VocabReview" navigation={this.props.navigation} />
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
  removeReviewWord: (word) => dispatch({ type: 'REMOVE_REVIEW_WORD', word }),
});

VocabReview.propTypes = {
  vocabList: PropTypes.object.isRequired,
  reviewList: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(VocabReview);

