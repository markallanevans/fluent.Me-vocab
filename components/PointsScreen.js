import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';
import PointDetails from './PointDetails';

const PointsScreen = ({
  expPoints,
  wordsStudied,
  sentencesStudied,
  sentencesReviewed,
}) => (
  <View style={styles.container} >
    <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
      <PointDetails title="Experience Points" content={expPoints} />
      <PointDetails title="Words Studied" content={wordsStudied} />
      <PointDetails title="Sentences Studied" content={sentencesStudied} />
      <PointDetails title="Sentences Reviewed" content={sentencesReviewed} />
    </View>
  </View>
);

PointsScreen.propTypes = {
  expPoints: PropTypes.number.isRequired,
  wordsStudied: PropTypes.number.isRequired,
  sentencesStudied: PropTypes.number.isRequired,
  sentencesReviewed: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  expPoints: state.studyStats.expPoints,
  wordsStudied: state.studyStats.wordsStudied,
  sentencesStudied: state.studyStats.sentencesStudied,
  sentencesReviewed: state.studyStats.currentSentenceIndex,
});

export default connect(mapStateToProps)(PointsScreen);

