import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { $primaryWhite, $secondaryRed } from '../styles/styles';

const PointDetails = ({ content, title }) => (
  <View style={{
    height: 200,
    width: 150,
    alignItems: 'center',
  }}
  >
    <View style={{
        backgroundColor: $secondaryRed,
        padding: 10,
        margin: 10,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        shadowColor: $primaryWhite,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}
    >
      <Text
        style={{
          color: $primaryWhite,
          fontSize: 25,
          textAlign: 'center',
        }}
      >
        {content} 
      </Text>
    </View>
    <View style={{
      padding: 10,
      shadowColor: $primaryWhite,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    }}
    >
      <Text style={{
        fontSize: 18,
        color: $primaryWhite,
        textAlign: 'center',
      }}
      >
        {title}
      </Text>
    </View>
  </View>
);

PointDetails.propTypes = {
  content: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default PointDetails;
