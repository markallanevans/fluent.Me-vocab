import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Blank from './Blank';

class SentenceEmpty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: this.props.sentence,
    };
  }

  componentWillMount() {
    // getSentences('Animals');
    const words = this.state.sentence.split(' ');
    const wordCount = words.length;
    this.setState({
      words,
      wordCount,
    });
  }

  render() {
    console.log(this.props);
    const blanks = this.state.words.map((word, index) => <Blank word={word} key={index} />);
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {blanks}
      </View>
    );
  }
}

SentenceEmpty.propTypes = {
  sentence: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  sentence: state.sentenceStore,
});

// const mapDispatchToProps = dispatch => ({
//   getSentences: (category) => dispatch(getSentences(category)),
// });

export default connect(mapStateToProps)(SentenceEmpty);

