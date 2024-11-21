import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

// Artists Data
const artists = [
  { name: 'SZA', image: require('../../assets/images/sza.jpg'), songs: ['Good Days', 'I Hate U, I Love U', 'Drew Barrymore'] },
  { name: 'Drake', image: require('../../assets/images/drake.jpg'), songs: ['God’s Plan', 'Hotline Bling', 'In My Feelings'] },
  { name: 'Kendrick Lamar', image: require('../../assets/images/kendrick.jpg'), songs: ['HUMBLE.', 'Alright', 'DNA.'] },
];

// Popular Audio Data
const popularAudio = [
  { name: 'Bruno Mars', image: require('../../assets/images/bruno_mars.jpg') },
  { name: 'Air Supply', image: require('../../assets/images/air_supply.jpg') },
  { name: 'Hev Abi', image: require('../../assets/images/hev_abi.jpg') },
  { name: 'Silent Sanctuary', image: require('../../assets/images/silent_sanctuary.jpg') },
];

const Music = () => {
  const handleArtistPress = (artist) => {
    Alert.alert(`${artist.name}'s Songs`, artist.songs.join('\n'));
  };

  return (
    <View style={styles.container}>
      {/* Made for You Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Made for you</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#fff"
        />
        <View style={styles.iconRow}>
          <TouchableOpacity>
            {/* Notification Icon */}
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            {/* Settings Icon */}
            <Text style={styles.icon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {artists.map((artist, index) => (
          <View key={index} style={styles.cardContainer}>
            <Image source={artist.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{artist.name}</Text>
            <Text style={styles.cardSubtitle}>Catch the latest playlist made just for you...</Text>
          </View>
        ))}
      </ScrollView>

      {/* Trending Now Section */}
      <Text style={styles.sectionTitle}>Trending now</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {popularAudio.map((audio, index) => (
          <View key={index} style={styles.cardContainer}>
            <Image source={audio.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{audio.name}</Text>
            <Text style={styles.cardSubtitle}>Song - Artist</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c', // Dark background
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    color: '#fff',
    marginLeft: 20,
  },
  cardContainer: {
    backgroundColor: '#181818',
    borderRadius: 8,
    padding: 10,
    marginRight: 15,
    width: 150,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 14,
  },
  cardSubtitle: {
    color: '#888',
    marginTop: 4,
    fontSize: 12,
  },
  searchBar: {
    height: 40,
    width: 160, 
    borderColor: '#35d0ba', 
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    color: '#fff',
  },
});
