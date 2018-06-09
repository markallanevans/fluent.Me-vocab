import sentences from '../data/sentences';

const sentenceStore = (state = { allCategories: sentences, loadedCategory: {} }, action) => {
  switch (action.type) {
    case 'LOAD_CATEGORY': {
      console.log(state);
      const { allCategories } = state;
      return {
        allCategories,
        loadedCategory: allCategories[action.category].sentences,
      };
    }
    case 'CHECK_SENTENCE':
      return state;
    default:
      return state;
  }
};

export default sentenceStore;
