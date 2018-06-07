import wordBank from '../data/wordbank';
import sentences from '../data/sentences';

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
      const formattedText = action.text.toLowerCase().trim();
      formattedText === action.answer ? state = true : state = false;
      return state;
    }
    default:
      return state;
  }
};

export const sentenceStore = (state = sentences, action) => {
  switch (action.type) {
    case 'GET_SENTENCES': {
      // const sentenceList = sentences[action.category].sentences;
      console.log(state[action.category].sentences[action.word]);
      return state;
    }
    case 'CHECK_SENTENCE':
      return state;
    default:
      return state;
  }
};

export const studyStats = (state = { expPoints: 0, wordsStudied: 0, sentencesStudied: 0 }, action) => {
  switch (action.type) {
    case 'GAIN_EXP_POINTS':
      // do something
      return state;
    case 'LOSE_EXP_POINTS':
      // do something
      return state;
    case 'ADD_WORDPOINTS':
      // do something
      return state;
    case 'ADD_SENTENCEPOINTS':
      // do something
      return state;
    default:
      return state;
  }
}