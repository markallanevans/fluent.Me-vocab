import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wordBlank: { padding: 10, margin: 10, backgroundColor: 'white' }
})

const Blank = ({ word }) => (
  <View style={styles.wordBlank}>
    <Text> {word} </Text>
  </View>
)

Blank.propTypes = {
  word: PropTypes.string.isRequired
}

export default Blank
