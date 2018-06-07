import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const PointsScreen = ({ expPoints, wordsStudied, sentencesStudied }) => (
  <View style={styles.container} >
    <Text style={styles.header} >Experience Points: {expPoints}</Text>
    <Text style={styles.header} >Words Studied: {wordsStudied}</Text>
    <Text style={styles.header} >Sentences Studied: {sentencesStudied}</Text>
  </View>
);

const mapStateToProps = state => ({
  expPoints: state.studyStats.expPoints,
  wordsStudied: state.studyStats.wordsStudied,
  sentencesStudied: state.studyStats.sentencesStudied,
});

export default connect(mapStateToProps)(PointsScreen);

