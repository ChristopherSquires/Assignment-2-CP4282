import { View, Text, Image } from 'react-native';

export default function Scare({ scareData, image }) {
  return (
      <>
      <Text>Character: {scareData.Character}</Text>
      <Text>Game: {scareData.Game}</Text>
      <Text>Year: {scareData.Year}</Text>
      <Image source={image}/>
      </>
      )
  }
