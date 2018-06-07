import sentences from '../data/sentences';

const sentenceStore = (state = sentences, action) => {
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

export default sentenceStore;
