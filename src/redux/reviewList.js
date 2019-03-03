const initialReviewList = []

const reviewList = (state = initialReviewList, action) => {
  switch (action.type) {
    case 'ADD_REVIEW_WORD':
      // TODO: move this logic out of the store,
      // only pass the action and update the state
      // if the word does not already exist
      return state.indexOf(action.id) === -1
        ? state.concat({
            id: action.id,
            word: action.word,
            English: action.word,
            showFront: true,
            showImage: true,
            reviewed: false
          })
        : state
    case 'REMOVE_REVIEW_WORD': {
      const newList = state.filter(index => index.word !== action.word)
      // const indexToRemove = state.indexOf(action.id);
      // const itemToRemove = state.splice(indexToRemove, 1);
      return newList
    }
    default:
      return state
  }
}

export default reviewList
