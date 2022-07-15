import React, {useContext} from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import { AuthContext } from '../../utils/auth';

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

function ProfileScreen() {
  const { isLoading, logout } = useContext(AuthContext);

  const onLogoutPressed = () => {
    logout();
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!!!</Text>
      <TouchableOpacity style={styles.button} onPress={(onLogoutPressed)}>

        <Text style={styles.buttonText}>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs(state) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
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
          // You can return any component that you like here!
          return (
            <View alignItems='center'>
              <Icon name={tabIcon} size='20' color={iconColor} />
              <Text style={{ fontSize: 10 }}>{tabText}</Text>
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
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function HomeScreen() {
  return (

    <MyTabs />

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    padding: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cdcdcf",
    color: "#333333",
    fontSize: 16,
    height: 44,
    paddingHorizontal: 15,
  },
  inputUsername: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  inputPassword: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  button: {
    height: 42,
    borderRadius: 6,
    backgroundColor: "#1977f3",
    justifyContent: "center",
    marginVertical: 15,
  },
  buttonText: {
    color: "#b4cafb",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    paddingVertical: 16,
  },
  linkText: {
    color: "#1c6ede",
    textAlign: "left",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
    padding: 22,
    paddingBottom: 0,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginBottom: 10,
  },
  dividerLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#cbccd0",
  },
  footerText: {
    width: 50,
    textAlign: "center",
  },
  buttonRegister: {
    width: "100%",
    backgroundColor: "transparent",
  },
  buttonRegisterText: {
    color: "#1077f7",
  },
});