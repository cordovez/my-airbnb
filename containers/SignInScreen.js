import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Platform,
  SafeAreaView,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView style={styles.keyboardView}>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require("../assets/airbnb-logo.png")}
            style={styles.logoSplash}
          />
          <Text style={styles.title}>Sign in</Text>
          <View>
            <TextInput placeholder="email" style={styles.fields} />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.fields}
            />
            <Pressable
              style={styles.btnSplash}
              title="Sign in"
              onPress={async () => {
                const userToken = "secret-token";
                setToken(userToken);
              }}
            >
              <Text>Sign in</Text>
            </Pressable>
            <TouchableOpacity
              style={styles.smalllNav}
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.smalllNavText}>Create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {},

  safeAreaView: {
    backgroundColor: "black",
    flex: 1,
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  container: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scrollview: {
    backgroundColor: "pink",
  },
  logoSplash: {
    width: "30%",
    height: "30%",
    resizeMode: "contain",
    display: "flex",
  },
  title: {
    fontSize: 25,
    color: "#646464",
  },
  fields: {
    borderBottomColor: "pink",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    width: 300,
    marginTop: 30,
    marginBottom: 30,
  },
  btnSplash: {
    display: "flex",
    width: 150,
    height: 50,
    borderRadius: 40,
    borderColor: "#FF5A5F",
    borderWidth: 2,
    color: "#FF5A5F",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 20,
  },
  smallNav: {
    display: "flex",
    alignContent: "center",
  },
  smalllNavText: {
    display: "flex",
    alignSelf: "center",
    marginBottom: 100,
  },
});
