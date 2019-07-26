import { StyleSheet } from 'react-native'
import { Colors } from './theme/'

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: Colors.$primaryRed,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  pointsText: {
    color: Colors.$primaryWhite,
    fontSize: 18
  },
  description: {
    color: Colors.$primaryWhite,
    fontSize: 12
  }
})

export default styles