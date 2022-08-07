import {GET_ALL_EPISODES} from '../actions/types';

const INITIAL_STATE = {
  allEpisodes: [],
};

export function EpisodesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_EPISODES:
      return {
        ...state,
        allEpisodes: action.payload,
      };
    default:
      return state;
  }
}
