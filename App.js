import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Image, Platform, SafeAreaView } from 'react-native';

export default function App() {
  console.log("App executed");
  return (
    <SafeAreaView style={[styles.container, conStyles]}>
      <Text> Community Garden Management</Text>
      <StatusBar style="auto" />
      <View style={{
        width: "50%",
        height: 70,
      }}></View>
      <TouchableWithoutFeedback onPress={() => console.log("touched")}>
      <Image fadeDuration={1000} source={require('./assets/Logo.png')}/>
      </TouchableWithoutFeedback>
      <View fadeDuration={{
        width: "50%",
        height: 70,
      }}></View>
      <Button color="#08540a" title="Login/Create an account?" onPress={() => console.log("Yes account")}/>
      <Button color="#838a54" title="continue as guest" onPress={() => console.log("No account")}/>
      <Button color="#FFA500" title="Link to our website!" onPress={() => console.log("Website")}/>
    </SafeAreaView>
  );
}
const conStyles = {backgroundColor: "#00ad00"};
const beta = StyleSheet.create({container:{
  flex: 1,
  backgroundColor: '##00ad00',
  alignItems: 'center',
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
},
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ad00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
