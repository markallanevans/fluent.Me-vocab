import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { $primaryRed, $primaryWhite } from '../../styles/styles';

// TODO: add animation to make the border flash or glow when points,
// TODO: add a fillup so that it fills up

const ExperiencePoints = ({ experiencePoints }) => (
  <View style={{
    marginTop: 35,
    backgroundColor: $primaryRed,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  }}
  >
    <Text style={{
      color: $primaryWhite,
      fontSize: 18,
    }}
    >
      {experiencePoints}
    </Text>
    <Text style={{
      color: $primaryWhite,
      fontSize: 12,
    }}
    >
      pts
    </Text>
  </View>
);

ExperiencePoints.propTypes = {
  experiencePoints: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  experiencePoints: state.studyStats.expPoints,
});

export default connect(mapStateToProps)(ExperiencePoints);
