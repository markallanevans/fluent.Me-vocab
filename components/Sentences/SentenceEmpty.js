import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Blank from './Blank';

const category = 'Animals';

class SentenceEmpty extends Component {
  componentWillMount() {
    this.props.loadCategory(category);
    this.props.loadSentence(this.props.currentSentenceIndex);
  }

  render() {
    const blanks = this.props.words.map((word, index) =>
      (<Blank
        word={word}
        key={index.toString()}
      />));
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {blanks}
      </View>
    );
  }
}

SentenceEmpty.propTypes = {
  loadCategory: PropTypes.func.isRequired,
  loadSentence: PropTypes.func.isRequired,
  currentSentenceIndex: PropTypes.number.isRequired,
  words: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  sentenceStore: state.sentenceStore,
  currentSentenceIndex: state.studyStats.currentSentenceIndex,
  words: state.sentenceStore.words,
});

const mapDispatchToProps = dispatch => ({
  loadCategory: () => dispatch({ type: 'LOAD_CATEGORY', category }),
  loadSentence: () => dispatch({ type: 'LOAD_SENTENCE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SentenceEmpty);

