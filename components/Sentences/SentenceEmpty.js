import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Blank from './Blank';
import WordBox from '../WordBox';
import styles from '../../styles/styles';

const category = 'Animals';

class SentenceEmpty extends Component {
  componentWillMount() {
    this.props.loadCategory(category);
    this.props.loadSentence(this.props.currentSentenceIndex);
  }

  render() {
    const { words, currentCategoryWords } = this.props;
    const newWord = words.filter(w => currentCategoryWords.indexOf(w) !== -1);
    const wordsWithBlank = [...words];
    wordsWithBlank[words.indexOf(newWord.toString())] = '               ';

    const blanks = wordsWithBlank.map((word, index) =>
      (<Blank
        word={word}
        key={index.toString()}
      />));
    return (
      <View style={styles.centered} >
        <View>
          <WordBox word={{ id: 1, English: newWord, showFront: true, showImage: true, word: newWord }} />
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {blanks}
        </View>
      </View>
    );
  }
}

//TODO: add property to WordBox to determine if it is 'pressable';

SentenceEmpty.propTypes = {
  loadCategory: PropTypes.func.isRequired,
  loadSentence: PropTypes.func.isRequired,
  currentSentenceIndex: PropTypes.number.isRequired,
  words: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  sentenceStore: state.sentenceStore,
  currentSentenceIndex: state.studyStats.currentSentenceIndex,
  currentCategoryWords: state.sentenceStore.categoryWords,
  words: state.sentenceStore.words,
  reviewList: state.sentenceStore.reviewList,
});

const mapDispatchToProps = dispatch => ({
  loadCategory: () => dispatch({ type: 'LOAD_CATEGORY', category }),
  loadSentence: () => dispatch({ type: 'LOAD_SENTENCE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SentenceEmpty);

