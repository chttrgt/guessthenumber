import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

export default function InsructionText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Colors.primary200,
    fontSize: 24,
  },
});
