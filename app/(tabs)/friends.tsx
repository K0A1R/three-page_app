import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const friends = () => {
  const friendsList = [
    { id: 1, name: 'Contacts', subtitle: 'Find your contacts' },
    { id: 2, name: 'Hatsune Miku', subtitle: 'Shared videos with you' },
    { id: 3, name: 'Karie Israeli', subtitle: 'Friends with user one' },
    { id: 4, name: 'Yae Miko', subtitle: 'Followed by Karie Israeli' },
    { id: 5, name: 'Invite Friends', subtitle: null },
  ];

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.friendsList} contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.followTextContainer}>
            <Text style={styles.followText}>Follow your friends to watch their videos</Text>
          </View>

          {friendsList.map((friend) => (
              <View key={friend.id} style={styles.friendItem}>
                <View style={styles.defaultProfilePic}>
                  {friend.name === 'Contacts' ? (
                      <MaterialIcons name="contacts" size={30} color="#888" />
                  ) : friend.name === 'Invite Friends' ? (
                      <MaterialIcons name="person-add" size={30} color="#888" />
                  ) : (
                      <Ionicons name="person" size={30} color="#888" />
                  )}
                </View>

                <View style={styles.friendDetails}>
                  <Text style={styles.friendName}>{friend.name}</Text>
                  {friend.subtitle && <Text style={styles.friendSubtitle}>{friend.subtitle}</Text>}
                  <View style={styles.buttonContainer}>
                    {friend.name === 'Contacts' || friend.name === 'Invite Friends' ? (
                        <TouchableOpacity
                            style={[
                              styles.findButton,
                              friend.name === 'Invite Friends' && styles.inviteButton,
                            ]}
                        >
                          <Text style={styles.buttonText}>
                            {friend.name === 'Contacts' ? 'Find' : 'Invite'}
                          </Text>
                        </TouchableOpacity>
                    ) : (
                        <>
                          <TouchableOpacity style={styles.removeButton}>
                            <Text style={styles.buttonText}>Remove</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.followBackButton}>
                            <Text style={styles.buttonText}>Follow Back</Text>
                          </TouchableOpacity>
                        </>
                    )}
                  </View>
                </View>
              </View>
          ))}
        </ScrollView>
      </SafeAreaView>
  );
};

export default friends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#000',
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  friendsList: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  followTextContainer: {
    padding: 15,
    paddingTop: 60,
  },
  followText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
  findButton: {
    backgroundColor: '#EC4D60',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 4,
    flex: 1,
  },
  inviteButton: {
    backgroundColor: '#2F2F2F',
    paddingVertical: 6,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  defaultProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  friendDetails: {
    flex: 1,
  },
  friendName: {
    fontSize: 18,
    marginBottom: 2,
    color: '#fff',
  },
  friendSubtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  removeButton: {
    backgroundColor: '#2F2F2F',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 4,
    flex: 1,
  },
  followBackButton: {
    backgroundColor: '#EC4D60',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 4,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});