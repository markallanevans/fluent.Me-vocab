const initialReviewList = [];

const reviewList = (state = initialReviewList, action) => {
  switch (action.type) {
    case 'ADD_REVIEW_WORD':
      return state.indexOf(action.id) === -1 ? state.concat(action.id) : state;
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
