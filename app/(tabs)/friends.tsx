import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

const friends = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Friends</Text>
      </View>
    </SafeAreaView>
  );
};

export default friends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
