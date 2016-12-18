import * as types from '../actions/types';

const initialState = {
  message: 'Something something generate more.',
  author: 'Jez Templeton'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FAREWELL_GENERATE:
            return {
              ...state,
              message: 'Forsooth, you be leaving.',
              author: 'Brian McBlessedface'
            };
        default:
          return state;
    }
};
