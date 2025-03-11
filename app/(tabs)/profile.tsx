import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons, AntDesign, Entypo, SimpleLineIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const videos = [
  { id: '1', thumbnail: 'https://picsum.photos/400/600' },
  { id: '2', thumbnail: 'https://picsum.photos/401/600' },
  { id: '3', thumbnail: 'https://picsum.photos/402/600' },
  { id: '4', thumbnail: 'https://picsum.photos/403/600' },
  { id: '5', thumbnail: 'https://picsum.photos/404/600' },
  { id: '6', thumbnail: 'https://picsum.photos/405/600' },
  { id: '7', thumbnail: 'https://picsum.photos/406/600' },
  { id: '8', thumbnail: 'https://picsum.photos/407/600' },
];

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* top line */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <AntDesign name="adduser" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.topUsernameContainer}>
          <Text style={styles.topUsername}>Minnie</Text>
          <Entypo name="chevron-down" size={18} color="black"/>
        </View>
        <View style={styles.topIcons}>
          <TouchableOpacity style={styles.iconSpacing}>
            <Ionicons name="footsteps-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <MaterialCommunityIcons name="line-scan" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <SimpleLineIcons name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/*user info */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/11.jpg' }} 
          style={styles.avatar} 
        />
        <Text style={styles.username}>@Minnie</Text>
      </View>

      {/* statistics */}
      <View style={styles.statsContainer}>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>79</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>205</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>947</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* description */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>Welcome to my tiktok! 🚀 | Tech Enthusiast | Content Creator</Text>
      </View>

      {/* buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons name="table-of-contents" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="lock-closed-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
      </View>      

      {/* video list */}
      <View style={styles.videoContainer}>
        <FlatList
          data={videos}
          numColumns={3}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 1 }}
          renderItem={({ item }) => (
            <Image source={{ uri: item.thumbnail }} style={styles.videoThumbnail} />
          )}
        />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
  topBar: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 },
  topUsernameContainer: { flexDirection: "row", alignItems: "center", position: "absolute", left: "50%", transform: [{ translateX: -50 }] },
  topUsername: { fontSize: 18, fontWeight: "bold" },
  topIcons: { flexDirection: "row", alignItems: "center" },
  iconSpacing: { marginLeft: 15 },
  header: { alignItems: 'center', padding: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  username: { fontSize: 18, fontWeight: 'bold' },
  followText: { color: '#fff', fontWeight: 'bold' },
  bioContainer: { paddingHorizontal: 50, paddingVertical: 5, alignItems: "center" },
  bioText: { fontSize: 14, color: "#555", textAlign: "center" },
  statsContainer: { flexDirection: 'row', alignItems: 'center', paddingRight: 20},
  stats: { flexDirection: 'row', flex: 1, justifyContent: "space-around", paddingVertical: 10, paddingLeft: 30 },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 18, fontWeight: 'bold' },
  statLabel: { fontSize: 14, color: '#666' },
  buttonContainer: { flexDirection: "row", justifyContent: "space-around", paddingTop: 10, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  iconButton: { padding: 10 },
  videoContainer: { flex: 1 },
  videoThumbnail: { width: width / 3, height: width / 3, margin: 1 },
  editButton: { backgroundColor: "#e0e0e0", width: 55, height: 35, borderRadius: 20, alignItems: "center", justifyContent: "center", marginLeft: 20 },
});

export default Profile;
