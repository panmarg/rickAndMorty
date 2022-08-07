import {createSelector} from 'reselect';

const episodesReducer = state => state.episodesReducer;

export const getAllEpisodes = createSelector(
  episodesReducer,
  reducer => reducer.allEpisodes,
);
