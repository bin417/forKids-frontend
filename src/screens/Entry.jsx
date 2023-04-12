import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import palette from "../assets/colorPalette";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Padding,
  Border,
  FontFamily,
  Color,
  FontSize,
} from "../GlobalStyles.js";

const Entry = ({ navigation }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate("Tutorial2");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.mainSlogan}>
      <Text style={styles.text}>{`아이들의
더 멋진
추억을 위해`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 290,
    left: 41,
    fontSize: 50,
    fontWeight: "700",
    fontFamily: FontFamily.promptBold,
    color: Color.white,
    textAlign: "left",
  },
  mainSlogan: {
    backgroundColor: Color.basePrimary,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Entry;
