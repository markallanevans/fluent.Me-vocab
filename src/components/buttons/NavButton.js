import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import styles from '../../styles/buttonStyles'

const NavButton = ({ text, navTo, navigation, action }) => (
  <View>
    <TouchableHighlight
      style={styles.button}
      onPress={() =>
        action === 'navigate'
          ? navigation.navigate(navTo)
          : navigation.push(navTo)
      }>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableHighlight>
  </View>
)

NavButton.defaultProps = {
  action: 'navigate'
}

NavButton.propTypes = {
  text: PropTypes.string.isRequired,
  navTo: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  action: PropTypes.string
}

export default NavButton
