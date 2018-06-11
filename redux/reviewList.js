const initialReviewList = [];

const reviewList = (state = initialReviewList, action) => {
  switch (action.type) {
    case 'ADD_REVIEW_WORD':
      // TODO: move this logic out of the store, only pass the action and update the state if the word does not already exist
      return state.indexOf(action.id) === -1 ? state.concat({ id: action.id, word: action.word, reviewed: false }) : state;
    case 'REMOVE_REVIEW_WORD': {
      // const indexToRemove = state.indexOf(action.id);
      // const itemToRemove = state.splice(indexToRemove, 1);
      return state;
    }
    default:
      return state;
  }
};

export default reviewList;
