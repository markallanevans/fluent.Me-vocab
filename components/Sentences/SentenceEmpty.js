import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Blank from './Blank';
import { loadCategory } from '../../redux/actions';

const category = 'Animals';
const word = 'dog';

class SentenceEmpty extends Component {
  constructor() {
    super();
    this.state = {
      words: [],
    };
  }

  componentWillMount() {
    console.log(this.props.sentenceStore);
    this.props.loadCategory(category);  
    const sentenceObject = this.props.sentenceStore.allCategories[category].sentences;
    const sentence = Object.values(sentenceObject)[this.props.currentSentenceIndex];
    const words = sentence.split(' ');
    this.setState({
      words,
    })
  }
  
  render() {
    console.log(this.props.sentenceStore);
    const blanks = this.state.words.map((word, index) => <Blank word={word} key={index} />);
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {blanks}
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

const mapDispatchToProps = dispatch => ({
  loadCategory: () => dispatch({ type: 'LOAD_CATEGORY', category }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SentenceEmpty);

