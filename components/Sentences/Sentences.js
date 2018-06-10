import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SentenceEmpty from './SentenceEmpty';
import CheckButton from '../CheckButton';
import styles from '../../styles/styles';

const Sentences = ({
  sentenceStore,
  currentSentenceIndex,
  nextSentenceScreen,
}) => (
  <View style={styles.container}>
    <Text> {currentSentenceIndex} / {Object.keys(sentenceStore.loadedCategory).length} </Text>
    <SentenceEmpty />
    <TouchableHighlight onPress={() => nextSentenceScreen()} >
      <CheckButton />
    </TouchableHighlight>
  </View>
);

const nextSentenceScreen = () => (dispatch) => {
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

const mapDispatchToProps = dispatch => ({
  nextSentenceScreen: () => dispatch(nextSentenceScreen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sentences);
