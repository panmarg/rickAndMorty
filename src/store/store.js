import {configureStore} from '@reduxjs/toolkit';
import {CharactersReducer} from '../reducers/CharactersReducer';
import {EpisodesReducer} from '../reducers/EpisodesReducer';

const store = configureStore({
  reducer: {
    charactersReducer: CharactersReducer,
    episodesReducer: EpisodesReducer,
  },
});

export default store;
