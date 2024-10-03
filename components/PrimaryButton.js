import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PrimaryButton(props) {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
