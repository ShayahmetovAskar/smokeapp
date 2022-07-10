import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!!!!!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs(state) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          console.log()
          let tabIcon;
          let tabText = route.name;
          let iconColor;
          let s;
          let textColor;
          if (route.name === 'Actions') {
            tabIcon = 'bars';
          } else if (route.name === 'Maps') {
            tabIcon = 'map';
          } else if (route.name === "Open") {
            tabIcon = 'search';
          } else if (route.name == "Notifications") {
            tabIcon = 'bell';
          } else if (route.name == 'Profile') {
            tabIcon = 'user';
          } else {

          }
          
          if (focused) {
            textColor = "red";
            iconColor = 'orange';
          } else {
            textColor = "grey";
            iconColor = 'grey';
            
          }
          console.log({textColor});
          // You can return any component that you like here!
          return (
            <View alignItems='center'>
              <Icon name={tabIcon} size='20' color={iconColor} />
              <Text style={{fontSize: 10}}>{tabText}</Text>
            </View>

          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: { zIndex: 110 },
        safeAreaInset: { bottom: 'never' },
      }}
    >
      <Tab.Screen name="Actions" component={Home} />
      <Tab.Screen name="Maps" component={SettingsScreen} />
      <Tab.Screen name="Open" component={SettingsScreen} />
      <Tab.Screen name="Notifications" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function HomeScreen() {
    return (

          <MyTabs />

      );
};