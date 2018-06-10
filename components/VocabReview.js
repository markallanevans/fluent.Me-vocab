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

const VocabReview = ({
  vocabList,
  reviewList,
  navigation,
  isCorrect,
}) => {
  const randCardId = Math.floor(Math.random() * reviewList.length);
  let animatedCheckBox = '';
  if (isCorrect === true) {
    animatedCheckBox = <AnimatedCheckBox />;
  }
  return (
    <View style={styles.container}>
      <View style={{ height: 100, width: 100 }}>
        {animatedCheckBox}
      </View>
      <View style={styles.boxContainer}>
        <WordBox word={Object.values(vocabList)[randCardId]} />
      </View>
      <WordCheck answer={Object.values(vocabList)[randCardId].English} id={randCardId} />
      <ProgressBar />
      <TextButton text="next" navTo="VocabReview" navigation={navigation} />
    </View>
  );
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

