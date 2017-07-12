import { sample, uniq } from 'lodash';
import { detect } from 'gender-detection';

import * as types from '../actions/types';

const initialState = {
  salutation: "Hey",
  message: {
    start: "It sucks it ended like this. ",
    middle: "I originally made this when Harry left. Your variant makes much better messages, though. Click the 'Another!' link to see more.",
    end: "All the best, and cheers,"
  },
  author: {
    name: "Jez Templeton",
    role: "Underwater Barfighter",
    portrait: require('../../assets/jez.jpg')
  }
};

const strings = require('../../assets/strings');

function generateMessage() {
  const middle = () => {
    let middle = [];

    let x = Math.round(Math.random() * 3) + 1;

    for (let i = 0; i < x; i++ ){
      middle.push(sample(strings.middle));
    }

    return uniq(middle).join(" ");
  };

  return {
    start: '', // sample(strings.start),
    middle: middle(),
    end: sample(strings.end)
  };
}

function getRandomPortrait(name) {
  const gender = (detect(name) === "female") ? "female" : "male";

  // magic numbers!
  const numFemale = 132;
  const numMale = 116;

  const num =  Math.floor(Math.random() * (gender === "female" ? numFemale : numMale - 1));
  return require(`../../assets/${gender}/${num}.jpg`);
}

function generateAuthor() {
  const name = sample(strings.firstname) + " " + sample(strings.surname);

  return {
    name: name,
    role: sample(strings.role),
    portrait: getRandomPortrait(name),
  };
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FAREWELL_GENERATE:
            const farewell = {
              salutation: sample(strings.salutations),
              message: generateMessage(),
              author: generateAuthor(),
            }

            return {
              ...state,
              ...farewell,
              hash: btoa(JSON.stringify(farewell))
            };
        default:
          return state;
    }
};
