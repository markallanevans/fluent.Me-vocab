import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Blank from './Blank';
import { loadCategory } from '../../redux/actions';

const category = 'Animals';
const word = 'dog';
const index = 0;

class SentenceEmpty extends Component {
  constructor() {
    super();
    this.state = {
      words: [],
    };
  }

  componentWillMount() {
    this.props.loadCategory(category);
    this.props.loadSentence(this.props.currentSentenceIndex);
    const sentenceObject = this.props.sentenceStore.allCategories[category].sentences;
    const sentence = Object.values(sentenceObject)[this.props.currentSentenceIndex+1];
    const words = sentence.split(' ');
    console.log(this.props.sentenceStore);
    this.setState({
      words,
    })
  }

  render() {
    const words = this.props.currentSentence.split(' ');
    const blanks = words.map((word, index) => <Blank word={word} key={index} />);
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {blanks}
        <Text>{this.props.currentSentence}</Text>
      </View>
    );
  }
}

SentenceEmpty.propTypes = {
  loadCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sentenceStore: state.sentenceStore,
  currentSentenceIndex: state.studyStats.currentSentenceIndex,
});

const mapDispatchToProps = (dispatch) => ({
  loadCategory: () => dispatch({ type: 'LOAD_CATEGORY', category }),
  loadSentence: index => dispatch({ type: 'LOAD_SENTENCE', index }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SentenceEmpty);

