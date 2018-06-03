import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles/styles';
import WordBox from './WordBox';
import ProgressBar from './ProgressBar';
import WordCheck from './WordCheck';
import TextButton from './TextButton';
import VocabTools from './VocabTools';

const VocabReview = ( { vocabList, reviewList, navigation, dispatch } ) => (
  <View style={styles.container}>
    <View style={styles.boxContainer}>
      <WordBox word={Object.values(vocabList)[reviewList.length]} />
    </View>
    <WordCheck answer={Object.values(vocabList)[reviewList.length].English}/>
    <ProgressBar />
    <TextButton text={'next'} navTo={'VocabReview'} navigation={navigation}/>
  </View>
);

const mapStateToProps = (state, props) => {
  return {
  vocabList: state.vocabList,
  reviewList: state.reviewList,
  }
}

export default connect(mapStateToProps)(VocabReview);

