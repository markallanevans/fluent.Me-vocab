import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SentenceEmpty from './SentenceEmpty';
import CheckButton from '../CheckButton';
import styles from '../../styles/styles';

const Sentences = ({ dispatch, loadedSentence, sentenceStore, currentSentenceIndex, navigation, nextSentenceScreen }) => (
  <View style={styles.container}>
    <Text> {currentSentenceIndex} / {Object.keys(sentenceStore.loadedCategory).length} </Text>
    <SentenceEmpty currentSentence={loadedSentence} />
    <TouchableHighlight onPress={() => nextSentenceScreen()} >
      <CheckButton />
    </TouchableHighlight>
  </View>
);

const nextSentenceScreen = () => (dispatch) => {
  dispatch({ type: 'INCREMENT_SENTENCE_COUNTER' });
  // will call the next sentence from here as well
  dispatch({ type: 'LOAD_SENTENCE', index: 3});
};

Sentences.propTypes = ({
  dispatch: PropTypes.func.isRequired,
});

const mapStateToProps = state => ({
  sentenceStore: state.sentenceStore,
  loadedSentence: state.sentenceStore.loadedSentence,
  currentSentenceIndex: state.studyStats.currentSentenceIndex,
});

const mapDispatchToProps = dispatch => ({
  nextSentenceScreen: () => dispatch(nextSentenceScreen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sentences);
