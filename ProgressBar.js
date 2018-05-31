import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import s from './styles/progressBarStyles';
import { $secondaryRed, $tertiaryRed, $primaryWhite, $secondaryWhite } from './styles/styles';

const dumbProgress = 7;
const dumbTotal = 10;
const progPercent = dumbProgress / dumbTotal;

export default ProgressBar = () => (
  <View style={s.progressBarContainer}>
    <View style={s.emptyBar}>
      <View style={s.progress} />
    </View>
  </View>
);

// either refactor this into the styles sheet or store the colors separately in the stylesheet and use them, 
// would be beneficial to be able to call $primaryRed here without having to import styles separately, so importing colors.js or something
// add icon to left and to right... maybe animate the right icon everytime progress is updated.
// const dumbProgress should ultimately come from the store
// this is one advantage perhaps of having a separate array for the total 10 words to be studied today.
// OR... SIMPLY add a "studied" to words that are checked... and make a 0 - 10 ticker that advances to the next screen when progress is complete.


const s = StyleSheet.create({
  progressBarContainer: {
    marginTop: 20,
  },
  emptyBar: {
    height: 9,
    width: 250,
    backgroundColor: $secondaryWhite,
    borderRadius: 50,
    borderColor: $tertiaryRed,
    borderWidth: 2,
  },
  progress: {
    height: 5,
    width: 250 * progPercent,
    backgroundColor: $secondaryRed,
    borderRadius: 50,
  }
})
