import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';

const Chat = () => {
  const [friendName, setFriendName] = useState(''); // State to hold the input value
  const [messages, setMessages] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null); // State to track the selected conversation
  const navigation = useNavigation(); // Hook to handle navigation

  const existingConversations = [
    { name: 'Alfred V Barreda', profile: require('../../assets/icons/profile.png') },
    { name: 'Tangi', profile: require('../../assets/icons/profile.png') },
    { name: 'Mama', profile: require('../../assets/icons/profile.png') },
    { name: 'Lola', profile: require('../../assets/icons/profile.png') },
  ];

  const handleAddFriend = () => {
    if (friendName) {
      alert(`Friend ${friendName} added!`);
      setFriendName(''); // Clear the input after adding the friend
    } else {
      alert('Please enter a name.');
    }
  };

  const handleGoHome = () => {
    navigation.navigate('home'); // Navigate to the home screen
  };

  const handleNewMessage = () => {
    // Navigate to the new message screen or open a chat box
    alert('Message box opened!');
  };

  const handleDeleteMessage = (index) => {
    setMessages((prevMessages) => prevMessages.filter((_, i) => i !== index));
  };

  const openConversation = (name) => {
    setSelectedConversation(name); // Set the selected conversation
  };

  const closeConversation = () => {
    setSelectedConversation(null); // Clear the selected conversation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chat</Text>

      {/* Existing Conversations */}
      <FlatList
        data={existingConversations}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.conversation} onPress={() => openConversation(item.name)}>
            <Image source={item.profile} style={styles.profileImage} />
            <Text style={styles.conversationText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Search bar for adding a friend */}
      <TextInput
        style={styles.searchBar}
        placeholder="Enter friend's name"
        value={friendName}
        onChangeText={setFriendName}
      />

      {/* Button to add friend */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddFriend}>
        <Text style={styles.buttonText}>Add Friend</Text>
      </TouchableOpacity>

      {/* Return Home button */}
      <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
        <Text style={styles.buttonText}>Return Home</Text>
      </TouchableOpacity>

      {/* Small button to open new message */}
      <TouchableOpacity style={styles.messageButton} onPress={handleNewMessage}>
        <Image source={require('../../assets/icons/contacts.png')} style={styles.messageIcon} />
      </TouchableOpacity>

      {/* Conditional rendering for selected conversation */}
      {selectedConversation && (
        <View style={styles.messageBox}>
          <Text style={styles.messageHeading}>{selectedConversation}</Text>
          <TextInput
            style={styles.messageInput}
            placeholder="Type a message..."
          />
          <TouchableOpacity style={styles.sendButton} onPress={closeConversation}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={closeConversation}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e6f2ff', // Light blue background
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Poppins-BoldItalic',
    color: '#1c3a63', // Darker blue text
  },
  searchBar: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#1db954', // Spotify green
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: '#0059b3', // Blue
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-BoldItalic',
  },
  messageButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0059b3', // Blue
    padding: 15,
    borderRadius: 50,
  },
  messageIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  conversation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  conversationText: {
    fontSize: 18,
    fontFamily: 'Poppins-BoldItalic',
  },
  messageBox: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  messageHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Poppins-BoldItalic',
  },
  messageInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  sendButton: {
    backgroundColor: '#1db954', // Spotify green
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#ff4d4d', // Red for close
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

