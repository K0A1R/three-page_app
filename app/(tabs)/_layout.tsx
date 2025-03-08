import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.light.tabBarColor,
          height: 80,
        },
        tabBarActiveTintColor: Colors.dark.tabIconSelected,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <AntDesign name="plussquare" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => (
            <AntDesign name="inbox" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
