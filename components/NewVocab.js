import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles/styles';
import WordBox from './WordBox';
import ProgressBar from './ProgressBar';
import TextButton from './TextButton';
import VocabReview from './VocabReview';
import VocabTools from './VocabTools';

const NewVocab = ( { vocabList, navigation } ) => (
  <View style={styles.container}>
    <View style={styles.boxContainer}>
      {Object.values(vocabList).slice(0,4).map((word, index) => (
          <View key={index}>
            <WordBox 
              word={word}
            />
            <VocabTools id={word.id}/>
          </View>
      ))}
    </View>
    <ProgressBar />
    <TextButton text={'Review'} navTo={'VocabReview'} navigation={navigation} />
  </View>
);

const mapStateToProps = (state, props) => {
  return {
  vocabList: state.vocabList
  }
}

export default connect(mapStateToProps)(NewVocab);

