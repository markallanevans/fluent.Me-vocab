const checkAnswer = (state = null, action) => {
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

export default checkAnswer;
