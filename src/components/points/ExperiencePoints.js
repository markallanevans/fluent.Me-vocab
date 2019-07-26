import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from '../../styles/experiencePointStyles'

function ExperiencePoints({ experiencePoints }) {
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
