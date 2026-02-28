import { Text, View, StyleSheet } from "react-native";
// import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.view}>
      <Text>Index Page</Text>
      {/* <Link href="/Login" style={styles.loginButton}>
        Login
      </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: { backgroundColor: "gray", borderRadius: 10, padding: 10 },
});
