import React, {useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import colors from '../utils/colors';

const SingleCharacter = ({name, image, gender, status, species, origin}) => {
  const {
    cardContainer,
    imageContainer,
    imageShape,
    infoContainer,
    detailsContainer,
    detailsTitles,
    detailsValues,
    detailFonts,
  } = styles;

  const getOrign = useMemo(() => {
    switch (origin) {
      case 'Earth (Replacement Dimension)':
        return 'Earth (RD)';

      default:
        return origin;
    }
  }, [origin]);

  return (
    <View style={cardContainer}>
      <View style={imageContainer}>
        <Image
          style={imageShape}
          source={{
            uri: image,
          }}
        />
      </View>

      <View style={infoContainer}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.basicBlue,
          }}>
          {name}
        </Text>
        <View style={detailsContainer}>
          <View style={detailsTitles}>
            <Text style={detailFonts}>{'Gender'}</Text>
            <Text style={detailFonts}>{'Status'}</Text>
            <Text style={detailFonts}>{'Type'}</Text>
            <Text style={detailFonts}>{'Origin'}</Text>
          </View>
          <View style={detailsValues}>
            <Text style={detailFonts}>{gender}</Text>
            <Text style={detailFonts}>{status}</Text>
            <Text style={detailFonts}>{species}</Text>
            <Text style={detailFonts}>{getOrign}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.basicBlack,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.basicBlue,
    padding: 8,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    borderWidth: 10,
  },
  imageShape: {
    right: 8,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colors.basicBlue,
    width: 120,
    height: 120,
  },
  infoContainer: {
    flex: 1.5,
    borderRadius: 10,
    right: 8,
    marginTop: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 2,
    paddingVertical: 5,
  },
  detailsTitles: {
    flex: 0.6,
  },
  detailsValues: {
    flex: 1.2,
    left: 8,
  },
  detailFonts: {
    fontSize: 16,
    color: colors.basicBlue,
  },
});

export default SingleCharacter;
