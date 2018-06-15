import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Blank from './Blank';
import WordBox from '../WordBox';
import Animation from '../Animation';
import styles from '../../styles/styles';

const category = 'Animals';

class SentenceWithBlank extends Component {
  constructor() {
    super();
    this.state = {
      isCorrect: null,
    };
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  componentWillMount() {
    this.props.loadCategory(category);
    this.props.loadSentence(this.props.currentSentenceIndex);
  }

  checkAnswer(userAnswer, realAnswer) {
    const result = (userAnswer.trim().toLowerCase() === realAnswer);
    this.setState({
      isCorrect: result,
    });
  }

  render() {
    const { words, currentCategoryWords } = this.props;
    const newWord = words.filter(w => currentCategoryWords.indexOf(w) !== -1);
    const wordsWithBlank = [...words];
    wordsWithBlank[words.indexOf(newWord.toString())] = '                   ';
    // FIXME: above needs to be made more elegant
    const blanks = wordsWithBlank.map((word, index) =>
      (<Blank
        word={word}
        key={index.toString()}
      />));
    return (
      <View style={styles.centered} >
        <View>
          <WordBox
            word={{
              id: 1,
              English: newWord,
              showFront: true,
              showImage: true,
              word: newWord,
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {blanks}
        </View>
        {
          this.state.isCorrect === true ?
            <Animation onDone={() => this.setState({ isCorrect: false })} />
          :
            <View />
        }
        <TextInput
          placeholder="..."
          style={styles.answerBox}
          onSubmitEditing={e => this.checkAnswer(e.nativeEvent.text, newWord)}
          // TODO: add Redux Thunk and set this action up to 'CHECK_ANSWER' and also 'REMOVE_WORD'
          // onSubmitEditing={() => dispatch({ type: 'REMOVE_REVIEW_WORD', id})}
        />
      </View>
    );
  }
}

// TODO: add property to WordBox to determine if it is 'pressable';

SentenceWithBlank.propTypes = {
  loadCategory: PropTypes.func.isRequired,
  loadSentence: PropTypes.func.isRequired,
  currentSentenceIndex: PropTypes.number.isRequired,
  currentCategoryWords: PropTypes.array.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(SentenceWithBlank);

