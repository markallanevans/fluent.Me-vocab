import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/styles';
import WordBox from './WordBox';
import ProgressBar from './ProgressBar';
import WordCheck from './WordCheck';
import TextButton from './TextButton';

const NewVocab = ( { vocabList, navigation } ) => (
  <View style={styles.container}>
    <View style={styles.boxContainer}>
      {Object.values(vocabList).slice(0,1).map((word, index) => (
          <WordBox 
          word={word}
          key={index}
          />
      ))}
    </View>
    <WordCheck answer={'perro'}/> {/* Also need to figure out where to source this from. Later this will need to be changed so it reflects the proper target language */}
    <ProgressBar />
    <TextButton text={'Next Screen!'} navTo={'Home'} navigation={navigation} />
  </View>
);

const mapStateToProps = (state, props) => {
  return {
  vocabList: state.vocabList
  }
}

export default connect(mapStateToProps)(NewVocab);

