// import wordBank from '../data/wordbank';
import sentences from '../data/sentences'

const data = sentences

const vocabList = (state = {}, action) => {
  const keyToUpdate = action.id
  switch (action.type) {
    // TODO: move logic below to transformer that is called when app/component is loaded
    case 'LOAD_WORDS': {
      const {
        [action.category]: { listWords }
      } = data
      const wordListArray = listWords.map((word, index) => ({
        id: index,
        English: word,
        Spanish: 'no translation for now',
        showFront: true,
        showImage: true,
        toReview: false
      }))
      const wordListObject = Object.assign({}, [...wordListArray])
      return wordListObject
    }
    case 'ADD_REVIEW_WORD': {
      return {
        ...state,
        [keyToUpdate]: {
          ...state[keyToUpdate],
          toReview: true
        }
      }
    }
    case 'FLIP_CARD':
      return {
        ...state,
        [keyToUpdate]: {
          ...state[keyToUpdate],
          showFront: !state[keyToUpdate].showFront
        }
      }
    case 'TOGGLE_IMAGE':
      return {
        ...state,
        [keyToUpdate]: {
          ...state[keyToUpdate],
          showImage: !state[keyToUpdate].showImage
        }
      }
    default:
      return state
  }
}

export default vocabList
