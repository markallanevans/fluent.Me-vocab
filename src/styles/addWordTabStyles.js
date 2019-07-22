import { StyleSheet } from 'react-native'
import { Colors } from './theme/'

const addWordTabStyles = StyleSheet.create({
  newWordBox: {
    width: 200,
    height: 50,
    textAlign: 'center',
    backgroundColor: Colors.$secondaryWhite,
    borderColor: Colors.$secondaryRed,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 24
  },
  newSentenceBox: {
    width: 300,
    height: 200,
    textAlign: 'center',
    backgroundColor: Colors.$secondaryWhite,
    borderColor: Colors.$secondaryRed,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 24,
    flexWrap: 'wrap'
  },
  instructions: {
    color: Colors.$primaryWhite,
    fontSize: 18,
    padding: 10
  }
})

export default addWordTabStyles
