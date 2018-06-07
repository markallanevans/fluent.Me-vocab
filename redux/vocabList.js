import wordBank from '../data/wordbank';

const vocabList = (state = wordBank, action) => {
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

export default vocabList;
