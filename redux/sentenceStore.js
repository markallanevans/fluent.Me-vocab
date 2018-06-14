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
      const { allCategories, loadedCategory } = state;
      const categories = Object.keys(allCategories);
      categories.forEach((category) => {
        console.log('updating category ', category)
        allCategories[category].listWords = allCategories[category].listWords.concat(action.word);
        if ('sentences' in allCategories[category]) allCategories[category].sentences[action.word] = action.sentence;
        console.log(allCategories[category])
      })

      return {
        ...state,
        allCategories,
      }

      // return {
      //   ...state,
      //   allCategories = {
      //     ...allCategories[action.category].listWords, listWords.concat([action.word]),
      //     ...allCategories[action.category].sentences: allCategories[action.category].sentences.[action.word]: {action.sentence} // add word and sentence
      //   },
      //   categoryWords: Object.keys(loadedCategory),
      //   loadedSentence: Object.values(loadedCategory)[currentWordIndex],
      //   words: Object.values(loadedCategory)[currentWordIndex].split(' '),
      // };
    }

    // object.categories.Animals = { ...object.categories.Animals, snakes: "snakes suck too" };


    case 'CHECK_SENTENCE':
      return state;
    default:
      return state;
  }
};

export default sentenceStore;
