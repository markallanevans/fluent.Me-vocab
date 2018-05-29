import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import WordBox from './WordBox';

const NewVocab = ( {vocabList} ) => (
  <View style={styles.container}>
    <View style={styles.boxContainer}>
      {vocabList.slice(0,4).map ((word, index) => (
        <WordBox word={word} key={index} />
      ))}
    </View>
  </View>
);

const mapStateToProps = (state, props) => {
  return {
  vocabList: state
  }
}

export default connect(mapStateToProps)(NewVocab);

