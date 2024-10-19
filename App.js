import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';

export default function App() {
  console.log("App executed");
  return (
    <SafeAreaView style={styles.container}>
      <Text> Community Garden Management</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/Logo.png')}/>
      <Button color="#08540a" title="Create an account?" onPress={() => console.log("Yes account")}/>
      <Button color="#838a54" title="continue as guest" onPress={() => console.log("No account")}/>
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

