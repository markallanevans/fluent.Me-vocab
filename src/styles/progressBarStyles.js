import { StyleSheet } from 'react-native'
import { Colors } from './theme/'

// DIMENSIONS
export const $mainFont = 24
export const $headerFont = $mainFont * 1.5
export const $p3 = 3 * 8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.$primaryRed,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: $headerFont,
    color: Colors.$primaryWhite
  },
  button: {
    fontSize: $headerFont,
    marginTop: 16,
    padding: $headerFont / 2.5,
    width: 250,
    textAlign: 'center',
    backgroundColor: Colors.$secondaryRed,
    color: Colors.$primaryWhite,
    shadowColor: Colors.$primaryWhite,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  imageSize: {
    width: 150,
    height: 150
  },
  wordBoxEng: {
    width: 150,
    height: 150,
    margin: 10,
    backgroundColor: Colors.$secondaryRed,
    borderColor: Colors.$secondaryWhite,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.$primaryWhite,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  wordBoxEsp: {
    width: 150,
    height: 150,
    margin: 10,
    backgroundColor: Colors.$tertiaryRed,
    borderColor: Colors.$secondaryWhite,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.$primaryWhite,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  vocabText: {
    color: Colors.$primaryWhite,
    fontSize: $mainFont
  },
  flashBox: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  answerBox: {
    width: 200,
    textAlign: 'center',
    backgroundColor: Colors.$secondaryWhite,
    borderColor: Colors.$secondaryRed,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 30
  },
  row: {
    flexDirection: 'row'
  },
  p15: {
    padding: 15
  },
  progressBarContainer: {
    marginTop: 20
  },
  emptyBar: {
    height: 9,
    width: 250,
    backgroundColor: Colors.$secondaryWhite,
    borderRadius: 50,
    borderColor: Colors.$tertiaryRed,
    borderWidth: 2
  },
  progress: {
    height: 5,
    backgroundColor: Colors.$secondaryRed,
    borderRadius: 50
  }
})

export default styles
