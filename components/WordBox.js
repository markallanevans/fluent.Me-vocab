import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const WordBox = ({ word, dispatch }) => (
  <View>
    <View style={word.showFront ? styles.wordBoxEng : styles.wordBoxEsp}>
      <TouchableHighlight
        onPress={() => dispatch({ type: 'FLIP_CARD', id: word.id })}
        onLongPress={() => dispatch({ type: 'TOGGLE_IMAGE', id: word.id })}
      >
        <View style={styles.flashBox}>
          {
          !word.showImage ?
            <Text style={styles.vocabText}>{word.showFront ? word.English : word.Spanish}
            </Text>
          :
            <Image source={{ uri: `https://source.unsplash.com/150x150/?${word.English}` }} style={styles.imageSize} />
          }
        </View>
      </TouchableHighlight>
    </View>
  </View>
);

WordBox.propTypes = {
  word: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(WordBox);
