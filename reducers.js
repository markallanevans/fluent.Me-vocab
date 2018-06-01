const wordBank = {
  '1': {
    id: '1',
    English: 'dog',
    Spanish: 'perro',
    showFront: true,
    showImage: true,
  },
  '2': {
    id: '2',
    English: 'cat',
    Spanish: 'gata',
    showFront: true,
    showImage: true,
  },
  '3': {
    id: '3',
    English: 'bird',
    Spanish: 'ave',
    showFront: true,
    showImage: true,
  },
  '4': {
    id: '4',
    English: 'lizard',
    Spanish: 'lagartija',
    showFront: true,
    showImage: true,
  },
  '5': {
    id: '5',
    English: 'fox',
    Spanish: 'zorro',
    showFront: true,
    showImage: true,
  },
  '6': { 
    id: '6',
    English: 'elephant',
    Spanish: 'elefante',
    showFront: true,
    showImage: true,
  }
};

const initialReviewList = [];

export const reviewList = (state = initialReviewList, action) => {
  switch(action.type) {
    case 'ADD_REVIEW_WORD':
      return state.concat(action.id);
    default:
      return state;
  }
}

export const vocabList = (state = wordBank, action) => {
  let keyToUpdate = action.id 
  switch(action.type) {
    case 'ADD_WORD':
      return state.concat(action.data);
    case 'FLIP_CARD':
      return {
        ...state,
        [keyToUpdate]: {
          ...state[keyToUpdate],
          showFront: !state[keyToUpdate].showFront
        },
      };
    case 'TOGGLE_IMAGE':
      return {
        ...state,
        [keyToUpdate]: {
          ...state[keyToUpdate],
          showImage: !state[keyToUpdate].showImage
        },
      };
    default:
      return state;
  }
};

export const checkAnswer = (state = null, action) => {
  switch(action.type) {
    case 'CHECK_ANSWER':
      action.text.toLowerCase().trim() === action.answer ? newState = true : newState = false;
      return newState;
    default:
      return null;
  }
}