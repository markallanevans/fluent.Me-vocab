import React from 'react';
import { StyleSheet } from 'react-native';

export const $primaryRed = '#D13C33';
const $secondaryRed = '#b13a33';
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
  box: {
    width: 150,
    height: 150,
    margin: 10,
    borderColor: $secondaryWhite,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  vocabText: {
    color: $primaryWhite,
    fontSize: $mainFont,
  }
});
