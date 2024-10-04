import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../../constants/colors";

export default function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 25,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    shadowColor: Colors.shadowBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: Colors.white,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
