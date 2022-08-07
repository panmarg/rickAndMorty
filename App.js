import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import BottomMainNavigation from './src/navigation/BottomMainNavigation';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {getAllCharactersContent} from './src/services/CharactersService';
import {getAllEpisodesContent} from './src/services/EpisodesService';

export const App = () => {
  useEffect(() => {
    getAllCharactersContent();
    getAllEpisodesContent();
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomMainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
