import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { useState } from "react";
import Scare from "../components/Scares.jsx";

const goldenFreddy = require("../assets/images/goldenfreddy.png");
const foxy = require("../assets/images/foxy.webp");
const chica = require("../assets/images/chica.jpg");

const images = { "goldenFreddy": goldenFreddy, "foxy": foxy, "chica": chica };

import scareData from "../assets/scares.json";

export default function Index() {
  const [scareIndex, setScareIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Scare scareData={scareData[scareIndex]} image={images[scareData[scareIndex].image]} />

      <View style={styles.buttonContainer}>
        {[0, 1, 2].map(index => (
          <Pressable
            key={index}
            onPress={() => setScareIndex(index)}
            style={[
              styles.button,
              scareIndex === index && styles.activeButton
            ]}
          >
            <Text style={styles.buttonText}>#{index + 1}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#666",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: "#ffcc00"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
