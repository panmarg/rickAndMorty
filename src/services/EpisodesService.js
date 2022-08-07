import axios from 'axios';
import {GET_ALL_EPISODES} from '../actions/types';
import store from '../store/store';

export const getAllEpisodesContent = async () => {
  return axios
    .get('https://rickandmortyapi.com/api/episode')
    .then(function (response) {
      // handle success
      store.dispatch({
        type: GET_ALL_EPISODES,
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
