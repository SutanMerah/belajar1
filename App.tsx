import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import {PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold} from '@expo-google-fonts/plus-jakarta-sans';
import { homeStyles } from './assets/styles/homeStyles';

export default function App() {

  const [fontsLoaded] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <View style={homeStyles.container}>
      <Image source={require('./assets/images/Mao.jpeg')} style={homeStyles.image} />
      <Text>Halo, saya Hafizhan Azka - 2405102061</Text>
      <StatusBar style="auto" />
    </View>
  );
}