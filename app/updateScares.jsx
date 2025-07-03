import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';

import { useContext } from 'react';
import { ScareContext } from '../components/ScareContext';

export default function UpdateScares() {
    const [currentScare, setCurrentScare] = useState(0)

    const { scareData, setScareData } = useContext(ScareContext);

    const [character, setCharacter] = useState(scareData[currentScare].character);
    const [year, setYear] = useState(scareData[currentScare].year);
    const [game, setGame] = useState(scareData[currentScare].game);
    const [image, setImage] = useState(scareData[currentScare].image);

    const changeYear = (value) => {
        const updatedYear = parseInt(value)
        setYear(updatedYear)
        }

    const changeGame = (value) => {
        const updatedGame = value;
        setGame(updatedGame)
        }

    const updatedScareData = () => {

        const updatedData = {
            character: character,
            year: year,
            game: game
            image: image
            }

        scareData[currentScare] = updatedData
        setScareData(scareData)
        }

    const changeScareIndex = (value) => {
        const index = parseInt(value)
        setCharacter(scareData[index].character);
        setYear(scareData[index].year);
        setGame(scareData[index].game);
        setCurrentScare(index);
        }

    return (
        <>
            <Text>Scare Index</Text>
            <Picker
                selectedValue={currentScare}
                onValueChange={(itemValue, itemIndex) =>
                    changeScareIndex(itemIndex)
                }>
                <Picker.Item label="Scare #1" value="s1" />
                <Picker.Item label="Scare #2" value="s2" />
                <Picker.Item label="Scare #3" value="s3" />
            </Picker>

            <Text>Character</Text>
            <TextInput value={character} onChangeText={setCharacter}/>

            <Text>Year</Text>
            <TextInput value={year.toString()} onChangeText={changeYear}/>

            <Text>Game</Text>
            <TextInput value={game.toString()} onChangeText={changeGame}/>

            <Text>Jumpscare</Text>
            <Picker
            selectedValue={poster}
            onValueChange={(itemValue, itemIndex) =>
                setImage(itemValue)
                }>
            <Picker.Item label="Golden Freddy #1" value="G_Fred" />
            <Picker.Item label="Golden Freddy #2" value="G_Fred2" />
            <Picker.Item label="Foxy #1" value="foxy" />
            <Picker.Item label="Foxy #2" value="foxy2" />
            <Picker.Item label="Chica #1" value="chica" />
            <Picker.Item label="Chica #2" value="chica2" />
            </Picker>
            <Button title="Update" onPress={updatedScareData} />

            </>
        )
    }