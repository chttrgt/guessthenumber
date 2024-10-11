import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Platform, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InsructionText from "../components/ui/InsructionText";
import { FontAwesome } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === +userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "Your know that is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InsructionText style={styles.insructionText}>
          Higher or Lower?
        </InsructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, "greater")}
              bradius={30}
            >
              <FontAwesome name="plus-circle" size={40} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, "lower")}
              bradius={30}
            >
              <FontAwesome name="minus-circle" size={40} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 7 : 50,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 20,
  },
  buttonContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  insructionText: {
    marginBottom: 20,
  },
});
