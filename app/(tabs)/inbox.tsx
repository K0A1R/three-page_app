import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

const inbox = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Inbox</Text>
      </View>
    </SafeAreaView>
  );
};

export default inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
