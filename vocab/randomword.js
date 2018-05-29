const vocabList = require('./vocablist');

const getRandomList = () => {
  console.log(vocabList);
}

const randomWord = () => {
  getRandomList();
}

randomWord();
console.log(vocabList);