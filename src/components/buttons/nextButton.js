import React from 'react'
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Colors } from '../../styles/styles/theme/'
import styles from '../../styles/buttonStyles'

const NextButton = () => (
  <View style={styles.buttonWithoutWidth}>
    <MaterialIcons
      name="navigate-next"
      size={50}
      color={Colors.$secondaryWhite}
    />
  </View>
)

export default NextButton
