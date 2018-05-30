const wordBank = {
  '1': {
    id: '1',
    English: 'dog',
    Spanish: 'perro',
    showFront: true,
  },
  '2': {
    id: '2',
    English: 'cat',
    Spanish: 'gata',
    showFront: true
  },
  '3': {
    id: '3',
    English: 'bird',
    Spanish: 'ave',
    showFront: true
  },
  '4': {
    id: '4',
    English: 'lizard',
    Spanish: 'lagartija',
    showFront: true
  },
  '5': {
    id: '5',
    English: 'fox',
    Spanish: 'zorro',
    showFront: true
  },
  '6': { 
    id: '6',
    English: 'elephant',
    Spanish: 'elefante',
    showFront: true
  }
};

export const vocabList = (state = wordBank, action) => {
  switch(action.type) {
    case 'ADD_WORD':
      return state.concat(action.data);
    case 'FLIP_CARD':
      console.log(action);
      console.log(state);
      return state;
    default:
      return state;
  }
};

//showfront as true/false
//