import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import SingleEpisode from '../components/SingleEpisode';
import {getAllEpisodes} from '../selectors/EpisodesSelectors';
import colors from '../utils/colors';

const EpisodesScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const episodes = useSelector(getAllEpisodes);

  const renderEpisodeCard = ({item}) => (
    <SingleEpisode
      id={item.id}
      name={item.name}
      episode={item.episode}
      releaseDate={item.air_date}
      characters={item.characters}
    />
  );

  const {screenContainer, categoriesContainer, categoryStyle} = styles;

  return (
    <View style={screenContainer}>
      <View>
        <Image
          style={{height: windowHeight / 3, width: windowWidth}}
          source={require('../assets/rick-and-morty-logo-removebg.png')}
        />
        <View style={categoriesContainer}>
          <Text style={categoryStyle}>{'Animation'}</Text>
          <Text style={categoryStyle}>{'Adventure'}</Text>
          <Text style={categoryStyle}>{'Comedy'}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          data={episodes}
          renderItem={renderEpisodeCard}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.basicBlack,
  },
  categoriesContainer: {
    bottom: 5,
    position: 'absolute',
    backgroundColor: 'red',
    padding: 8,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  categoryStyle: {
    fontSize: 10,
    color: colors.basicBlue,
    marginLeft: 8,
    padding: 8,
    borderRadius: 10,
    borderColor: colors.basicBlue,
    borderWidth: 1,
    backgroundColor: colors.basicBlack,
  },
});

export default EpisodesScreen;
