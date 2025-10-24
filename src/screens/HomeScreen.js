import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("CountriesScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Countries</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("About")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Shop")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Shop</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("List")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("ProductList")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Product List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("SimProductList")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Simple Product List</Text>
      </TouchableOpacity>

       <TouchableOpacity
        onPress={() => navigation.navigate("FlexScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Flex Screen</Text>
      </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("ApiScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to API Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("ChallengeScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Challenge Screen</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 20
  },
   button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: 250,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18
  }
});

export default HomeScreen;
