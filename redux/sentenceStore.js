import sentences from '../data/sentences';

const sentenceStore = (state = { allCategories: sentences, loadedCategory: {}, loadedSentence: '' }, action) => {
  switch (action.type) {
    case 'LOAD_CATEGORY': {
      const { allCategories } = state;
      return {
        allCategories,
        loadedCategory: allCategories[action.category].sentences,
      };
    }
    case 'LOAD_SENTENCE': {
      const { allCategories, loadedCategory } = state;
      return {
        allCategories,
        loadedCategory,
        loadedSentence: Object.values(loadedCategory)[action.index],
      }
    }
    case 'CHECK_SENTENCE':
      return state;
    default:
      return state;
  }
};

export default sentenceStore;
