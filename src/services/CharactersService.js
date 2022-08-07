import axios from 'axios';
import {GET_ALL_CHARACTERS} from '../actions/types';
import store from '../store/store';

export const getAllCharactersContent = async () => {
  return axios
    .get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
      // handle success
      store.dispatch({
        type: GET_ALL_CHARACTERS,
        payload: response.data.results,
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
