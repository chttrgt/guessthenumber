import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  TextInput,
  View,
  Platform,
  Text,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InsructionText from "../components/ui/InsructionText";

const StartGameScreen = ({ onPickNumber }) => {
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
    onPickNumber(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InsructionText>Enter a Number</InsructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler} bradius={25}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler} bradius={25}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 20 : 70,
  },

  numberInput: {
    height: 50,
    width: 300,
    fontSize: 32,
    borderColor: Colors.accent800,
    borderWidth: 1,
    borderRadius: 25,
    color: Colors.accent500,
    marginVertical: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: Colors.accent500T,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
