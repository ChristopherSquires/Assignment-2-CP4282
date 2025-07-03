import { View, Image, Button } from "react-native";
import { useRouter } from 'expo-router';
import { useState } from "react"
import Scare from "../components/Scares.jsx";
import { useContext } from 'react';
import { ScareContext } from '../components/ScareContext';

const G_Fred = require("../assets/images/goldenfreddy.jpg");
const G_Fred2 = require("../assets/images/golden_freddy_pose.webp");
const foxy = require("../assets/images/foxy.webp");
const foxy2 = require("../assets/images/foxy2.webp");
const chica = require("../assets/images/chica.jpg");
const chica2 = require("../assets/images/Jack-O-Chica.webp");

const images = { "G_Fred" : G_Fred, "G_Fred2" : G_Fred2, "foxy" : foxy, "foxy2" : foxy2, "chica" : chica, "chica2" : chica2 }


export default function Index() {
    const router = useRouter();
    const { scareData } = useContext(ScareContext);
    const [scareIndex, setScareIndex] = useState(0);

    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}
        >
        <Scare scareData={scareData[scareIndex]} image={images[scareData[scareIndex].image]} />
        <Button title="Switch Scare" onPress={ () => setScareIndex( (scareIndex + 1) % scareData.length)}/>
            <Button onPress={() => router.navigate('/')} title="Home"></Button>
        </View>
    );
}