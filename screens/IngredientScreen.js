import React from "react";
import { StyleSheet, Text, View, Button  } from "react-native";

const IngrediantScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Ingrediant Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IngrediantScreen;
