const checkAnswer = (state = null, action) => {
  switch (action.type) {
    case 'CHECK_ANSWER': {
      const formattedText = action.text.toLowerCase().trim();
      return (formattedText === action.answer);
    }
    default:
      return state;
  }
};

export default checkAnswer;
