import React from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styles, { $secondaryWhite } from '../../styles/styles'

const NextButton = () => (
  <View style={styles.buttonWithoutWidth}>
    <MaterialIcons name="navigate-next" size={50} color={$secondaryWhite} />
  </View>
)

export default NextButton
