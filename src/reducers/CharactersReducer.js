import {GET_ALL_CHARACTERS} from '../actions/types';

const INITIAL_STATE = {
  allCharacters: [],
};

export function CharactersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };
    default:
      return state;
  }
}
