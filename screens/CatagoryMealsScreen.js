import React from "react";
import { StyleSheet, Text, Button, View, Platform, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dataObj";
import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";/


const CatagoryMealsScreen = (props) => {

  const renderMealItem = (itemData) => {
    return <MealItem title={itemData.item.title}  />;
  };

  const catId = props.navigation.getParam("catagoryId");
  
  const displayedMeals = MEALS.filter(
    (meal) => meal.catagoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals}
      keyExtractor={(item, index)=> item.id}
      renderItem={renderMealItem}/>
    </View>
  );
};

CatagoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("catagoryId");
  const selectedCatagory = CATEGORIES.find((cat) => cat.id === catId);
  const HeaderColor = navigationData.navigation.getParam("color");
  return {
    headerTitle: selectedCatagory.title,
    headerStyle: {
      backgroundColor: HeaderColor,
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CatagoryMealsScreen;
