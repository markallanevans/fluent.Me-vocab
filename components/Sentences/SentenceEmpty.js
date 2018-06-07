import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Blank from './Blank';
import getSentences from '../../redux/actions';

class SentenceEmpty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: this.props.sentence['Animals'].sentences['dog'],
    };
  }

  componentWillMount() {
    // this.props.getSentences('Animals', 'dog');
    const words = this.state.sentence.split(' ');
    const wordCount = words.length;
    this.setState({
      words,
      wordCount,
    });
  }

  render() {
    const blanks = this.state.words.map((word, index) => <Blank word={word} key={index} />);
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {blanks}
      </View>
    );
  }
}

SentenceEmpty.propTypes = {
  sentence: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  sentence: state.sentenceStore,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getSentences: (category, word) => dispatch(getSentences(category, word)),
//   };
// };

export default connect(mapStateToProps)(SentenceEmpty);

