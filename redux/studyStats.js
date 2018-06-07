const initialStudyState = { expPoints: 0, wordsStudied: 0, sentencesStudied: 0 };

const studyStats = (state = initialStudyState, action) => {
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
};

export default studyStats;
