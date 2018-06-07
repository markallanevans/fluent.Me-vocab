export const flipCard = (id) => {
  type: 'FLIP_CARD',
  id
};

export const toggleImage = (id) => {
  type: 'TOGGLE_IMAGE',
  id
};

export const addReviewWord = (id) => {
  type: 'ADD_REVIEW_WORD',
  id
};

export const removeReviewWord = (id) => {
  type: 'REMOVE_REVIEW_WORD',
  id
};

export const checkAnswer = (text, answer) => {
  type: 'CHECK_ANSWER',
  text,
  answer
};

export const getSentences = (category) => {
  type: 'GET_SENTENCES',
  category
};

