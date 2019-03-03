const initialStudyState = {
  expPoints: 0,
  wordsStudied: 0,
  sentencesStudied: 0,
  currentSentenceIndex: 0
}

const studyStats = (state = initialStudyState, action) => {
  switch (action.type) {
    case 'GAIN_EXP_POINTS':
      // TODO: do something
      return state
    case 'ADD_WORD_POINTS': {
      const { wordsStudied } = state
      return {
        ...state,
        wordsStudied: wordsStudied + 1
      }
    }
    case 'ADD_REVIEW_WORD': {
      const { expPoints } = state
      return {
        ...state,
        expPoints: expPoints + 20
      }
    }
    case 'CORRECT_WORD': {
      const { expPoints } = state
      return {
        ...state,
        expPoints: expPoints + 50
      }
    }
    case 'LOAD_SENTENCE': {
      const { expPoints, sentencesStudied } = state
      return {
        ...state,
        expPoints: expPoints + 50,
        sentencesStudied: sentencesStudied + 100
      }
    }
    case 'INCREMENT_SENTENCE_COUNTER': {
      const currentIndex = state.currentSentenceIndex + 1
      return {
        ...state,
        currentSentenceIndex: currentIndex
      }
    }
    default:
      return state
  }
}

export default studyStats
