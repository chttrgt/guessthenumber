import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        {/* + - */}
      </View>
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
});
