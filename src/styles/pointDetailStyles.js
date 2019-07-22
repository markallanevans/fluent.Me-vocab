import { StyleSheet } from 'react-native'
import { Colors } from './theme/'

//TODO: refactor name of button styles as there are a few components using similar props (create design system)
// DIMENSIONS
export const $mainFont = 24
export const $headerFont = $mainFont * 1.5
export const $p3 = 3 * 8

const pointDetailStyles = StyleSheet.create({
  PointDetailsContainer: {
    height: 200,
    width: 150,
    alignItems: 'center'
  },
  PointDetailsMain: {
    backgroundColor: Colors.$secondaryRed,
    padding: 10,
    margin: 10,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    shadowColor: Colors.$primaryWhite,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  PointDetailsText: {
    color: Colors.$primaryWhite,
    fontSize: 25,
    textAlign: 'center'
  },
  PointDetailsDescriptionContainer: {
    padding: 10,
    shadowColor: Colors.$primaryWhite,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  PointDetailsDescriptionText: {
    fontSize: 18,
    color: Colors.$primaryWhite,
    textAlign: 'center'
  }
})

export default pointDetailStyles
