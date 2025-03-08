import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

const profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
