import React from 'react';
import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import SingleCharacter from '../components/SingleCharacter';
import {getAllCharacters} from '../selectors/CharactersSelectors';
import colors from '../utils/colors';

var _ = require('lodash');

const CharactersScreen = () => {
  const characters = useSelector(getAllCharacters);

  const renderCharacterCard = ({item}) => (
    <SingleCharacter
      name={item.name}
      image={item.image}
      gender={item.gender}
      status={item.status}
      species={item.species}
      origin={item.origin.name}
    />
  );

  const {screenContainer} = styles;

  return (
    <View style={screenContainer}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/736x/64/31/35/643135e60d9de9543ade17d3b96fff8a.jpg',
        }}
        style={{flex: 1}}>
        <View style={{marginTop: 40}} />
        <FlatList
          data={characters}
          renderItem={renderCharacterCard}
          keyExtractor={item => item.id}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.basicGrey,
  },
});

export default CharactersScreen;
