import { View, 
  Text, 
  ScrollView, 
  Image, 
  StyleSheet, 
  SafeAreaView,
  TouchableOpacity, 
  Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Story/Quick Access data
const stories = [
  {
    id: "create",
    image: "https://randomuser.me/api/portraits/cats/1.jpg",
    name: "Create",
    isCreate: true,
  },
  {
    id: "dylan",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Dylan Mulv...",
  },
  {
    id: "crypto",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Crypto Mas...",
  },
  {
    id: "desmonia",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Desmonia Dr...",
  },
  {
    id: "winter",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Winter",
  },
];

export default function InboxScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="add" size={28} color="black" />
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Inbox</Text>
          <View style={styles.onlineDot} />
        </View>
        <Ionicons name="search" size={28} color="black" />
      </View>

      <ScrollView style={styles.content}>
        {/* Stories/Quick Access Row */}
        <View style={styles.storiesContainer}>
          <View style={styles.thoughtBubble}>
            <Text style={styles.thoughtText}>Thoughts?</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesScroll}>
            {stories.map((story) => (
              <View key={story.id} style={styles.storyItem}>
                <View style={[styles.storyRing, story.isCreate && styles.createRing]}>
                  <Image source={{ uri: story.image }} style={styles.storyImage} />
                  {story.isCreate && (
                    <View style={styles.plusBadge}>
                      <Text style={styles.plusText}>+</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.storyName}>{story.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Main Feed Items */}
        <View style={styles.feedItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="people" size={24} color="white" />
          </View>
          <View style={styles.feedContent}>
            <Text style={styles.feedTitle}>New followers</Text>
            <Text style={styles.feedSubtitle}>Nina Nina Nina started followi...</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View>

        <View style={styles.feedItem}>
          <View style={[styles.iconContainer, styles.activityIcon]}>
            <Ionicons name="notifications" size={24} color="white" />
          </View>
          <View style={styles.feedContent}>
            <Text style={styles.feedTitle}>Activity</Text>
            <Text style={styles.feedSubtitle}>Mikey, RaggedAnne and 2 oth...</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>49</Text>
          </View>
        </View>

        <View style={styles.feedItem}>
          <View style={[styles.iconContainer, styles.systemIcon]}>
            <Ionicons name="folder" size={24} color="white" />
          </View>
          <View style={styles.feedContent}>
            <Text style={styles.feedTitle}>System notifications</Text>
            <Text style={styles.feedSubtitle}>Promote Assistant: Your...</Text>
            <Text style={styles.timeText}>10h</Text>
          </View>
          <View style={styles.dotBadge} />
        </View>

        {/* Suggested Accounts Section */}
        <Text style={styles.sectionTitle}>Suggested accounts</Text>

        <View style={styles.feedItem}>
          <View style={[styles.iconContainer, styles.contactsIcon]}>
            <Ionicons name="call" size={24} color="white" />
          </View>
          <View style={styles.feedContent}>
            <Text style={styles.feedTitle}>Contacts</Text>
            <Text style={styles.feedSubtitle}>Find your contacts</Text>
          </View>
          <View style={styles.findButton}>
            <TouchableOpacity>
              <Text style={styles.findButtonText}>Find</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Add padding for Android status bar
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 4,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
  },
  content: {
    flex: 1,
  },
  storiesContainer: {
    paddingVertical: 12,
    position: "relative",
  },
  thoughtBubble: {
    position: "absolute",
    left: 16,
    top: 0,
    backgroundColor: "#f1f1f1",
    padding: 8,
    borderRadius: 16,
    zIndex: 2,
  },
  thoughtText: {
    color: "#666",
  },
  storiesScroll: {
    paddingLeft: 16, // Reduced padding to allow create icon to go under thought bubble
  },
  storyItem: {
    alignItems: "center",
    marginRight: 16,
  },
  storyRing: {
    padding: 2,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#00E5FF",
  },
  createRing: {
    borderColor: "transparent",
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  plusBadge: {
    position: "absolute",
    bottom: -4,
    right: -4,
    backgroundColor: "#00E5FF",
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  storyName: {
    fontSize: 12,
    marginTop: 4,
  },
  feedItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#f1f1f1",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1DA1F2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  activityIcon: {
    backgroundColor: "#FF4B4B",
  },
  systemIcon: {
    backgroundColor: "#1a1a1a",
  },
  contactsIcon: {
    backgroundColor: "#4CAF50",
  },
  feedContent: {
    flex: 1,
  },
  feedTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  feedSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  timeText: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  badge: {
    backgroundColor: "#FF4B4B",
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 24,
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  dotBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF4B4B",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
  },
  findButton: {
    backgroundColor: "#FF4B4B",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  findButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  }
})
