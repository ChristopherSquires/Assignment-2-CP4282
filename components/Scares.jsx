import { View, Text, Image } from 'react-native';

export default function Scare({ scareData, image }) {
  return (
    <View>
      <Text>CHARACTER: {scareData.character}    GAME: {scareData.game}</Text>
      <Image source={image} style={{ width: 400, height: 400 }} />
    </View>
  );
}
