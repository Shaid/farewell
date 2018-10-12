import { sample, uniq } from 'lodash';
import { detect } from 'gender-detection';

import * as types from '../actions/types';

const MAX_MESSAGE_LENGTH = 160;

const initialState = {
  salutation: "Hey",
  message: {
    start: "It sucks it ended like this. ",
    middle: "It's been a pleasure working with you! Thank you for all your support (and for letting me get away with all the rash technology and development decisions). The Bureau will be much diminished by your departure.",
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

  let middleStr = middle()

  while (middleStr.length > MAX_MESSAGE_LENGTH) {
     middleStr = middle();
  }
  console.log(middleStr.length)
  return {
    start: sample(strings.start),
    middle: middleStr,
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
