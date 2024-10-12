import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  console.log("App executed");
  return (
    <SafeAreaView style={styles.container}>
      <Text> Community Garden Management</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/Logo.png')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ad00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
