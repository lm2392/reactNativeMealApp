import React from "react";
import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dataObj";
import Colors from "../constants/Colors";
import CatagoryGridTile from "../components/CatagoryGridTile";

const CatagoriesScreen = (props) => {
  
  const renderGridItem = (itemData) => {
    return <CatagoryGridTile title={itemData.item.title} color= {itemData.item.color} onSelect={() => {
      props.navigation.navigate({
        routeName: "CatagoryMeals",
        params: {
          catagoryId: itemData.item.id,
          color: itemData.item.color
        }        
      } );
    }}
        />
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CatagoriesScreen.navigationOptions = {
  headerTitle: "Meals Screen",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
 
});

export default CatagoriesScreen;
