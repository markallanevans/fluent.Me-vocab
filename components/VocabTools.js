import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';


const VocabTools = ({ id, dispatch }) => (
  <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
    <TouchableHighlight
      onPress={() => dispatch({ type: 'ADD_REVIEW_WORD', id })}
    >
      <Icon name="check-circle" size={20} color="#900" />
    </TouchableHighlight>
  </View>
);

VocabTools.propTypes = {
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(VocabTools);
