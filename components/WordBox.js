import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressPie from 'react-native-progress/Pie';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles, { $primaryRed } from '../styles/styles';

class WordBox extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <View>
        <View style={this.props.word.showFront ? styles.wordBoxEng : styles.wordBoxEsp}>
          <TouchableHighlight
            // onPress={() => dispatch({ type: 'FLIP_CARD', id: word.id })}
            onPress={() => this.props.flipCard(this.props.word.id)}
            onLongPress={() => this.props.addReviewWord(this.props.word.id, this.props.word.word, this.props.reviewList)}
          >
            <View style={styles.flashBox}>
              {
              !this.props.word.showImage ?
                <Text style={styles.vocabText}>{this.props.word.showFront ? this.props.word.English : this.props.word.Spanish}
                </Text>
              :
                <Image
                  source={{ uri: `https://source.unsplash.com/150x150/?${this.props.word.English}` }} 
                  style={styles.imageSize}
                  indicator={ProgressPie}
                  indicatorProps={{
                    size: 150,
                    color: $primaryRed,
                    borderWidth: 0,
                  }}
                />
              }
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

WordBox.propTypes = {
  word: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const addReviewWord = (id, word, reviewList) => dispatch => {

  //FIXME: why doesn't this work?
  console.log(reviewList.indexOf(reviewList.id));
  if (reviewList.indexOf(id) === -1) {
   dispatch({ type: 'ADD_REVIEW_WORD', id, word });
  }
  return;
}

const flipCard = (id) => dispatch => {
  dispatch({ type: 'TOGGLE_IMAGE', id})
}

const mapStateToProps = state => ({
  reviewList: state.reviewList,
  dispatch: state.dispatch,
})

const mapDispatchToProps = dispatch => ({
  // addReviewWord: (id, word) => dispatch({ type: 'ADD_REVIEW_WORD', id, word }),
  addReviewWord: (id, word, reviewList) => dispatch(addReviewWord(id, word, reviewList)),
  flipCard: id => dispatch(flipCard(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(WordBox);
