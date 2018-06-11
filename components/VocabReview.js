import React from 'react';
import { View } from 'react-native';
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
  }

  render() {
    const randCardId = Math.floor(Math.random() * this.props.reviewList.length);
    let animatedCheckBox = '';
    if (this.state.isCorrect === true) {
      animatedCheckBox = <AnimatedCheckBox />;
    }
    return (
      <View style={styles.container}>
        <View style={{ height: 100, width: 100 }}>
          {animatedCheckBox}
        </View>
        <View style={styles.boxContainer}>
          <WordBox word={Object.values(this.props.vocabList)[randCardId]} />
        </View>
        <WordCheck
          answer={Object.values(this.props.vocabList)[randCardId].English}
          isCorrect={this.state.isCorrect}
          checkAnswer={this.checkAnswer}
          id={randCardId}
        />
        <ProgressBar progress={5} total={10} />
        <TextButton text="next" navTo="VocabReview" navigation={this.props.navigation} />
      </View>
    );
  }
};


const mapStateToProps = state => (
  {
    vocabList: state.vocabList,
    reviewList: state.reviewList,
    isCorrect: state.checkAnswer,
  }
);

VocabReview.propTypes = {
  vocabList: PropTypes.object.isRequired,
  reviewList: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(VocabReview);

