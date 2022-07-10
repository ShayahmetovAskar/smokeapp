import React from "react";
import {
  TextStyle,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from "react-native";
import BannerImage from "../../../assets/ShelbySmoking.png";
import { useNavigation } from "@react-navigation/native";

const width = Image.resolveAssetSource(BannerImage).width;
const height = Image.resolveAssetSource(BannerImage).height;
const screenWidth = Dimensions.get("window").width;
const bannerHeight = (screenWidth / width) * height; // Image ratio is 75x46

export default function SignInScreen() {
  const navigation = useNavigation();
  const onSignInPressed = () => {
    navigation.navigate("Home");
    /*navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });*/
  };
  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <Image source={BannerImage} style={styles.banner}></Image>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={[styles.input, styles.inputUsername]}
            placeholder="Имя пользователя"
            placeholderTextColor="#cdcdcf"
          />

          <TextInput
            style={[styles.input, styles.inputPassword]}
            secureTextEntry={true}
            placeholder="Пароль"
            placeholderTextColor="#cdcdcf"
          />

          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Забыли пароль?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onSignInPressed}>
            <Text style={styles.buttonText}>Вход</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={[styles.link]} onPress={onSignUpPressed}>
            <Text style={[styles.linkText]}>Зарегистрируйтесь!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    resizeMode: "contain",
    width: "100%",
    height: bannerHeight,
  },
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
