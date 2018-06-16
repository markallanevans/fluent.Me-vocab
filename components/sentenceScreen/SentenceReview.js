import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import SentenceWithBlank from './SentenceWithBlank';
import styles, { $primaryWhite, $secondaryWhite } from '../../styles/styles';
import ProgressBar from '../ProgressBar';

const SentenceReview = ({
  sentenceStore,
  currentSentenceIndex,
  nextSentenceScreen,
}) => (
  <View style={styles.container}>
    <ProgressBar
      progress={currentSentenceIndex + 1}
      total={Object.keys(sentenceStore.loadedCategory).length}
    />
    <View style={{ height: 40 }} />
    <SentenceWithBlank />
    { currentSentenceIndex + 1 < Object.keys(sentenceStore.loadedCategory).length ?
      <TouchableHighlight
        style={styles.buttonWithoutWidth}
        onPress={() =>
        nextSentenceScreen(currentSentenceIndex, sentenceStore.loadedCategory)}
      >
        <Icon name="navigate-next" size={50} color={$secondaryWhite} />
      </TouchableHighlight>
    :
      <Text style={{
        color: $primaryWhite,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
        }}
      >
      Last Sentence of the day! Good Luck! See you next time!
      </Text>
    }
  </View>
);

const nextSentenceScreen = () => (dispatch) => {
  dispatch({ type: 'INCREMENT_SENTENCE_COUNTER' });
  dispatch({ type: 'LOAD_SENTENCE' });
};

SentenceReview.propTypes = ({
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

export default connect(mapStateToProps, mapDispatchToProps)(SentenceReview);
