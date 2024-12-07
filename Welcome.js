import{View, Text, StyleSheet, Image} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const welcome = () => { return(
<View style={styles.container}>
<LinearGradient
  // Background Linear Gradient
  colors={["#00ad00", 'green']}
  style={styles.background}
/>
<View>
<LinearGradient
  // Button Linear Gradient
  colors={['#838a54', '#123d12', '#695400']}
  style={styles.button}>
  <Text style={[styles.text, styles.textColor]}>Welcome to Community Garden Management!</Text>
</LinearGradient>
  <Image source={require("../assets/appIcon.png")}
  style={{
    height: 190,
    width: 300,
  }}/>
</View>
<LinearGradient colors={['#838a54', '#123d12', '#695400']}
style={styles.button}>
  <Text style={[styles.text, styles.textColor]}>Sign in</Text>
</LinearGradient>
<LinearGradient colors={['#838a54', '#123d12', '#695400']}
style={styles.button}>
  <Text style={[styles.text, styles.textColor]}>Continue as guest</Text>
</LinearGradient>
<LinearGradient colors={['#838a54', '#123d12', '#695400']}
style={styles.button}>
  <Text style={[styles.text, styles.textColor]}>Website</Text>
</LinearGradient>
<LinearGradient colors={['#838a54', '#123d12', '#695400']}
style={styles.button}>
  <Text style={[styles.text, styles.textColor]}>Contact Us!</Text>
</LinearGradient>

</View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  button: {
    padding: 15,
    alignItems: 'stretch',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  textColor: {
    color: '#7583ff',
  }
});
export default welcome;
