import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagoryMealsScreen from "../screens/CatagoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import IngredientScreen from "../screens/IngredientScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Catagories: { screen: CatagoriesScreen, navigationOptions: {headerTitle: 'meals'} },
    CatagoryMeals: {
      screen: CatagoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
    Ingredient: IngredientScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : "blue",
    },
  }
);

export default createAppContainer(MealsNavigator);
