import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import CharactersScreen from '../screens/CharactersScreen';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EpisodesScreen from '../screens/EpisodesScreen';
import {StyleSheet, Text, View} from 'react-native';

const BottomMainNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();

  const {tabScreenIconContainer} = styles;

  return (
    <Tab.Navigator
      initialRouteName="EpisodesScreen"
      activeColor={colors.basicGreen}
      inactiveColor={colors.basicGrey}
      barStyle={{
        backgroundColor: colors.basicBlack,
        borderTopWidth: 1,
        borderColor: colors.basicBlue,
      }}
      labeled={false}>
      <Tab.Screen
        name={'Episodes'}
        component={EpisodesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={tabScreenIconContainer}>
              <Icon
                name="movie"
                color={focused ? colors.basicBlue : colors.basicGrey}
                size={26}
              />
              <View style={{marginVertical: 2}} />
              <Text
                style={{color: focused ? colors.basicBlue : colors.basicGrey}}>
                {'Episodes'}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'Characters'}
        component={CharactersScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={tabScreenIconContainer}>
              <Icon
                name="people"
                color={focused ? colors.basicBlue : colors.basicGrey}
                size={26}
              />
              <View style={{marginVertical: 2}} />
              <Text
                style={{color: focused ? colors.basicBlue : colors.basicGrey}}>
                {'Characters'}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabScreenIconContainer: {
    width: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
  },
});

export default BottomMainNavigation;
