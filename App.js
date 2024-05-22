import { View, Text, StyleSheet, Image } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image 
          style={styles.logo}
          source={require("./src/assets/logo.png")}
        />
      </View>
      <View style={styles.principal_text}>
        <Text>Personal Financial Manager</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center"
  },

  principal_text: {
    padding: 50,
  },

  logo: {
    width: 250, 
    height: 250
  }
})