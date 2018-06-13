import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SentenceEmpty from './SentenceEmpty';
import NextButton from '../nextButton';
import styles from '../../styles/styles';
import ProgressBar from '../ProgressBar';

const Sentences = ({
  sentenceStore,
  currentSentenceIndex,
  nextSentenceScreen,
}) => (
  <View style={styles.container}>
    <ProgressBar
      progress={currentSentenceIndex} 
      total={Object.keys(sentenceStore.loadedCategory).length}
    />
    <View style={{ height: 40 }}/>
    <SentenceEmpty />
    <TouchableHighlight onPress={() => nextSentenceScreen(currentSentenceIndex, sentenceStore.loadedCategory)} >
      <NextButton />
    </TouchableHighlight>
  </View>
);

const nextSentenceScreen = (arg1, arg2) => (dispatch) => {
  console.log(arg1, arg2);
  dispatch({ type: 'INCREMENT_SENTENCE_COUNTER' });
  dispatch({ type: 'LOAD_SENTENCE' });
};

Sentences.propTypes = ({
  sentenceStore: PropTypes.object.isRequired,
  currentSentenceIndex: PropTypes.number.isRequired,
  nextSentenceScreen: PropTypes.func.isRequired,
});

const mapStateToProps = state => ({
  sentenceStore: state.sentenceStore,
  currentSentenceIndex: state.studyStats.currentSentenceIndex,
});

const mapDispatchToProps = (dispatch) => ({
  nextSentenceScreen: (arg1, arg2) => dispatch(nextSentenceScreen(arg1, arg2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sentences);
