import React, { useState } from "react";
import { StyleSheet, Alert, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredValue) {
    setEnteredNumber(enteredValue);
  }

  function confirmInputHandler() {
    const guessedNumber = Number(enteredNumber);
    if (isNaN(guessedNumber) || guessedNumber <= 0 || guessedNumber > 99) {
      Alert.alert(
        "Ivalid number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "OK",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 10,
    elevation: 15, // for only android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
