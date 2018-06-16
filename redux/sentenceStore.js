import sentences from '../data/sentences';

const sentenceStore = (state = {
  allCategories: sentences,
  currentCategoryTitle: '',
  loadedCategory: {},
  categoryWords: [],
  loadedSentence: '',
  currentWordIndex: 0,
  words: [],
}, action) => {
  switch (action.type) {
    case 'LOAD_CATEGORY': {
      const { allCategories } = state;
      return {
        ...state,
        allCategories,
        currentCategoryTitle: action.category,
        loadedCategory: allCategories[action.category].sentences,
        categoryWords: allCategories[action.category].listWords,
      };
    }
    case 'LOAD_SENTENCE': {
      const {
        loadedCategory,
        currentWordIndex,
      } = state;
      return {
        ...state,
        currentWordIndex: currentWordIndex + 1,
        categoryWords: Object.keys(loadedCategory),
        loadedSentence: Object.values(loadedCategory)[currentWordIndex],
        words: Object.values(loadedCategory)[currentWordIndex].split(' '),
      };
    }
    case 'ADD_NEW_WORD_TO_STORE': {
      const { allCategories } = state;
      const categories = Object.keys(allCategories);
      categories.forEach((category) => {
        allCategories[category].listWords = allCategories[category].listWords.concat(action.word);
        if ('sentences' in allCategories[category]) allCategories[category].sentences[action.word] = action.sentence;
      });
      return {
        ...state,
        allCategories,
      };
    }
    case 'CHECK_SENTENCE':
      return state;
    default:
      return state;
  }
};

export default sentenceStore;
