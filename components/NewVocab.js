import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/styles';
import WordBox from './WordBox';
import ProgressBar from './ProgressBar';
import TextButton from './TextButton';
import VocabTools from './VocabTools';

const NewVocab = ({ vocabList, navigation }) => (
  <View style={styles.container}>
    <View style={styles.boxContainer}>
      {Object.values(vocabList).slice(0, 4).map(word => (
        <View key={word.id}>
          <WordBox
            word={word}
          />
          <VocabTools id={word.id} />
        </View>
      ))}
    </View>
    <ProgressBar />
    <TextButton text="Review" navTo="VocabReview" navigation={navigation} />
  </View>
);

const mapStateToProps = state => ({
  vocabList: state.vocabList,
});

NewVocab.propTypes = {
  vocabList: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(NewVocab);

