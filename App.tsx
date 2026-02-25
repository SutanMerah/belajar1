import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/Mao.jpeg')} style={styles.image} />
      <Text>Halo, saya Hafizhan Azka - 2405102061</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 432,
    height: 324,
    marginBottom: 20,
  },
});
