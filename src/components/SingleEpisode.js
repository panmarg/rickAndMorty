import React, {useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {getAllCharacters} from '../selectors/CharactersSelectors';

import colors from '../utils/colors';

const SingleEpisode = ({id, name, episode, releaseDate, characters}) => {
  const [selectedId, setSelectedId] = useState(0);

  const allCharacters = useSelector(getAllCharacters);

  const charactersIds = useMemo(() => {
    return characters.map(character => {
      return character.replace(
        'https://rickandmortyapi.com/api/character/',
        '',
      );
    });
  }, [characters]);

  const getCharactersImages = useMemo(() => {
    const charactersImages = [];
    charactersIds.forEach(id => {
      allCharacters.find(character => {
        if (id === character.id.toString()) {
          charactersImages.push(character.image);
        }
      });
    });
    return charactersImages;
  }, [charactersIds, allCharacters]);

  const {
    cardContainer,
    numberOfEpisodeContainer,
    numberOfEpisodeStyle,
    titleOfEpisodeContainer,
    dropdownIconContainer,
    episodeDetailsContainer,
    episodeDetailsStyle,
  } = styles;

  return (
    <>
      <View
        style={[
          cardContainer,
          {
            borderTopWidth: id === 1 ? 2 : 0,
          },
        ]}>
        <View style={numberOfEpisodeContainer}>
          <Text style={numberOfEpisodeStyle}>{episode}</Text>
        </View>
        <View style={titleOfEpisodeContainer}>
          <Text style={numberOfEpisodeStyle}>{' "' + name + '"'}</Text>
        </View>
        <View style={dropdownIconContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              if (selectedId !== 0) {
                setSelectedId(0);
              } else {
                setSelectedId(id);
              }
            }}>
            <Icon
              name={
                selectedId === id ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
              }
              color={colors.basicBlue}
              size={26}
            />
          </TouchableOpacity>
        </View>
      </View>
      {selectedId === id ? (
        <View style={episodeDetailsContainer}>
          <View style={{flex: 1}}>
            <Text style={episodeDetailsStyle}>{'Title: "' + name + '"'}</Text>
          </View>
          <View style={{flex: 1, marginTop: 8}}>
            <Text style={episodeDetailsStyle}>
              {'Release Date: ' + releaseDate}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              marginTop: 8,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={episodeDetailsStyle}>{'Characters: '}</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={getCharactersImages}
              renderItem={({item, index}) => (
                <Image
                  style={{
                    marginLeft: 8,
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    borderWidth: 2,
                    borderColor: colors.basicBlue,
                  }}
                  source={{
                    uri: item,
                  }}
                />
              )}
              keyExtractor={item => item}
            />
          </View>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.basicBlack,
    borderColor: colors.basicBlue,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  numberOfEpisodeContainer: {
    flex: 1,
    padding: 16,
  },
  numberOfEpisodeStyle: {
    fontSize: 16,
    color: colors.basicBlue,
    fontWeight: 'bold',
  },
  titleOfEpisodeContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  dropdownIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  episodeDetailsContainer: {
    flex: 1,
    padding: 16,
    borderColor: colors.basicBlue,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  episodeDetailsStyle: {
    fontSize: 16,
    color: colors.basicBlue,
    fontWeight: 'bold',
  },
});

export default SingleEpisode;
