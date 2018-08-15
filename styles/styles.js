import { StyleSheet } from 'react-native'

// COLORS
export const $primaryRed = '#d65048'
export const $secondaryRed = '#b13a33'
export const $tertiaryRed = '#a13003'
export const $primaryWhite = '#ffeeee'
export const $secondaryWhite = '#ddaaaa'

// DIMENSIONS
export const $mainFont = 24
export const $headerFont = $mainFont * 1.5
export const $p3 = 3 * 8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $primaryRed,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: $headerFont,
    color: $primaryWhite
  },
  button: {
    marginTop: 16,
    padding: $headerFont / 3,
    backgroundColor: $secondaryRed,
    width: 250,
    borderRadius: 50,
    shadowColor: $primaryWhite,
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
    backgroundColor: $secondaryRed,
    borderRadius: 50,
    shadowColor: $primaryWhite,
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
    color: $primaryWhite
  },
  boxContainer: {
    marginTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: 375
  },
  reviewContainer: {
    flexDirection: 'row'
  },
  imageSize: {
    width: 150,
    height: 150
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  wordBoxEng: {
    width: 150,
    height: 150,
    margin: 10,
    overflow: 'hidden',
    backgroundColor: $secondaryRed,
    borderColor: $secondaryWhite,
    borderWidth: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: $primaryWhite,
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
    backgroundColor: $tertiaryRed,
    borderColor: $secondaryWhite,
    borderWidth: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: $primaryWhite,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  vocabText: {
    color: $primaryWhite,
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
    backgroundColor: $secondaryWhite,
    borderColor: $secondaryRed,
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
  }
})

export default styles
