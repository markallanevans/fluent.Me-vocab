import { StyleSheet } from 'react-native'
import { Colors } from './theme/'

const appStyles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  mainView: {
    flexDirection: 'row',
    shadowColor: Colors.$secondaryRed,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  contentView: {
    height: 1,
    width: 400,
    backgroundColor: Colors.$primaryRed,
    shadowColor: Colors.$primaryRed,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.9,
    shadowRadius: 3
  },
  m10: {
    margin: 10
  },
  pb40: {
    paddingBottom: 40
  }
})

export default appStyles
