import React from 'react';
import { StyleSheet } from 'react-native';

export const $primaryRed = '#D13C33';
const $secondaryRed = '#b13a33';
const $tertiaryRed = '#a13003';
const $primaryWhite = '#ffeeee';
const $secondaryWhite = '#ddaaaa';
const $mainFont = 24;
const $headerFont = $mainFont*1.5;
const $p3 = 3*8;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $primaryRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: $headerFont,
    color: $primaryWhite,
  },
  button: {
    fontSize: $headerFont,
    marginTop: 16,
    padding: $headerFont/2,
    width: 300,
    textAlign: 'center',
    backgroundColor: $secondaryRed,
    color: $primaryWhite,
    shadowColor: $primaryWhite,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  wordBox: {
    width: 150,
    height: 150,
    margin: 10,
    backgroundColor: $secondaryRed,
    borderColor: $secondaryWhite,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: $primaryWhite,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  vocabText: {
    color: $primaryWhite,
    fontSize: $mainFont,
  }
});
