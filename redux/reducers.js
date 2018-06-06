import wordBank from '../data/wordbank';

const initialReviewList = [];

export const reviewList = (state = initialReviewList, action) => {
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

export const vocabList = (state = wordBank, action) => {
  const keyToUpdate = action.id;
  switch (action.type) {
    case 'ADD_WORD':
      return state.concat(action.data);
    case 'FLIP_CARD':
      return {
        ...state,
        [keyToUpdate]: {
          ...state[keyToUpdate],
          showFront: !state[keyToUpdate].showFront,
        },
      };
    case 'TOGGLE_IMAGE':
      return {
        ...state,
        [keyToUpdate]: {
          ...state[keyToUpdate],
          showImage: !state[keyToUpdate].showImage,
        },
      };
    default:
      return state;
  }
};

export const checkAnswer = (state = null, action) => {
  switch (action.type) {
    case 'CHECK_ANSWER': {
      action.text.toLowerCase().trim() === action.answer ? state = true : state = false;
      return state;
    }
    default:
      return state;
  }
};
