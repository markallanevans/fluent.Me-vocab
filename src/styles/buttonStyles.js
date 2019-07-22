import { StyleSheet } from 'react-native'
import { Colors } from './theme/'

//TODO: refactor name of button styles as there are a few components using similar props (create design system)
// DIMENSIONS
export const $mainFont = 24
export const $headerFont = $mainFont * 1.5
export const $p3 = 3 * 8

const buttonStyles = StyleSheet.create({
  button: {
    marginTop: 16,
    padding: $headerFont / 3,
    backgroundColor: Colors.$secondaryRed,
    width: 250,
    borderRadius: 50,
    shadowColor: Colors.$primaryWhite,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  buttonWithoutWidth: {
    marginTop: 16,
    padding: $headerFont / 3,
    backgroundColor: Colors.$secondaryRed,
    borderRadius: 50,
    shadowColor: Colors.$primaryWhite,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  buttonText: {
    fontSize: $headerFont,
    textAlign: 'center',
    color: Colors.$primaryWhite
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default buttonStyles
