import {createSelector} from 'reselect';

const charactersReducer = state => state.charactersReducer;

export const getAllCharacters = createSelector(
  charactersReducer,
  reducer => reducer.allCharacters,
);
