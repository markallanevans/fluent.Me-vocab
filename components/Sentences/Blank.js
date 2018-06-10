import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const Blank = ({ word }) =>
  (
    <View style={{ padding: 10, margin: 10, backgroundColor: 'white' }} >
      <Text> {word} </Text>
    </View>
  );

Blank.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Blank;
