import sentences from '../data/sentences';

const sentenceStore = (state = { allCategories: sentences, loadedCategory: {}, loadedSentence: '', currentWordIndex: 0, words: [] }, action) => {
  switch (action.type) {
    case 'LOAD_CATEGORY': {
      const { allCategories } = state;
      return {
        ...state,
        allCategories,
        loadedCategory: allCategories[action.category].sentences,
      };
    }
    case 'LOAD_SENTENCE': {
      const { allCategories, loadedCategory, currentWordIndex, words } = state;
      const nextWord = currentWordIndex + 1;
      return {
        allCategories,
        loadedCategory,
        currentWordIndex: currentWordIndex + 1,
        loadedSentence: Object.values(loadedCategory)[currentWordIndex],
        words: Object.values(loadedCategory)[currentWordIndex].split(' '),
      }
    }
    case 'CHECK_SENTENCE':
      return state;
    default:
      return state;
  }
};

export default sentenceStore;
