import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from '../../styles/theme'
import styles from '../../styles/pointDetailStyles'

const PointDetails = ({ content, title }) => (
  <View style={styles.PointDetailsContainer}>
    <View style={styles.PointDetailsMain}>
      <Text style={styles.PointDetailsText}>{content}</Text>
    </View>
    <View style={styles.PointDetailsDescriptionContainer}>
      <Text style={styles.PointDetailsDescriptionText}>{title}</Text>
    </View>
  </View>
)

PointDetails.propTypes = {
  content: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default PointDetails
