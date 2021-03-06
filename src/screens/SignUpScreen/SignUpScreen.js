import React, { useContext } from "react";
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,

} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BannerImage from "../../../assets/ShelbySmoking2.png";
import CustomInput from "../../components/CustomInput";
import { AuthContext } from "../../utils/auth";
import { useForm, Contoller } from "react-hook-form";

const width = Image.resolveAssetSource(BannerImage).width;
const height = Image.resolveAssetSource(BannerImage).height;
const screenWidth = Dimensions.get("window").width;
const bannerHeight = (screenWidth / width) * height;

const SignUpScreen = ({ navigation }) => {
  const { isLoading, register } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignUpPressed = (data) => {
    console.log(data.email, data.username, data.password);
    //console.log(data.email);
    register(data.email, data.username, data.password);

  };

  return (
    <>
      <StatusBar></StatusBar>
      <Image source={BannerImage} style={styles.banner}></Image>
      <ScrollView>
        <View style={styles.content}>
          <CustomInput
            name="email"
            placeholder="Email"
            control={control}
          />
          <CustomInput
            name="username"
            placeholder="Username"
            control={control}
          />

          <CustomInput
            name="password"
            placeholder="Password"
            control={control}
          />

        </View>
        <TouchableOpacity style={styles.button} onPress={(handleSubmit(onSignUpPressed))}>
          <Text style={styles.buttonText}>Создать учетную запись</Text>
        </TouchableOpacity>
      </ScrollView>
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
  horisontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    padding: 22,
    flexShrink: 1,

  },
  input: {
    borderWidth: 1,
    borderColor: "#cdcdcf",
    color: "#333333",
    fontSize: 16,
    height: 44,
    paddingHorizontal: 15,
  },
  inputText: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  inputName: {
    width: "49%",
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
    marginHorizontal: 22,
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

  buttonRegister: {
    width: "100%",
    backgroundColor: "transparent",
  },
  buttonRegisterText: {
    color: "#1077f7",
  },
});

export default SignUpScreen;