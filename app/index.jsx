import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const goldenFreddy = require("../assets/images/goldenfreddy.png");
const foxy = require("../assets/images/foxy.webp");
const chica = require("../assets/images/chica.jpg");

export default function Index() {
  const router = useRouter();

  return (
      <View>
          <Text>Welcome to the Scarefest!</Text>
          <Button onPress={() => router.navigate('/jumpscare')} title="Jumpscares"></Button>
         </View>
      )
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
