import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { $primaryWhite, $secondaryRed } from '../../styles/styles'

const styles = StyleSheet.create({
  PointDetailsContainer: {
    height: 200,
    width: 150,
    alignItems: 'center'
  },
  PointDetailsMain: {
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
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  PointDetailsText: {
    color: $primaryWhite,
    fontSize: 25,
    textAlign: 'center'
  },
  PointDetailsDescriptionContainer: {
    padding: 10,
    shadowColor: $primaryWhite,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  PointDetailsDescriptionText: {
    fontSize: 18,
    color: $primaryWhite,
    textAlign: 'center'
  }
})

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
