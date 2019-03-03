/* eslint-disable */

export const flipCard = id => {
  type: 'FLIP_CARD', id
}

export const toggleImage = id => {
  type: 'TOGGLE_IMAGE', id
}

export const addReviewWord = id => {
  type: 'ADD_REVIEW_WORD', id
}

export const removeReviewWord = id => {
  type: 'REMOVE_REVIEW_WORD', id
}

export const incrementSentenceCounter = () => {
  type: 'INCREMENT_SENTENCE_COUNTER'
}

//Maybe add points based on number of words

export const checkAnswer = (text, answer) => {
  type: 'CHECK_ANSWER', text, answer
}

export const loadCategory = (category, word) => {
  type: 'LOAD_CATEGORY', category, word
}

export const loadSentence = index => {
  type: 'LOAD_SENTENCE', index
}

/* eslint-enable */
