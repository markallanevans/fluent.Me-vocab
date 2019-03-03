import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { $primaryRed, $primaryWhite } from '../../styles/styles'

//@flow
// TODO: add animation to make the border flash or glow when points,
// TODO: add a fillup so that it fills up

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: $primaryRed,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  pointsText: {
    color: $primaryWhite,
    fontSize: 18
  },
  description: {
    color: $primaryWhite,
    fontSize: 12
  }
})

function ExperiencePoints({ experiencePoints }: { experiencePoints: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>{experiencePoints}</Text>
      <Text style={styles.description}>pts</Text>
    </View>
  )
}

ExperiencePoints.propTypes = {
  experiencePoints: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  experiencePoints: state.studyStats.expPoints
})

export default connect(mapStateToProps)(ExperiencePoints)
