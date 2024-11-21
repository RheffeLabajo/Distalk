import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={require('../../assets/images/rheffe.jpg')}
        style={styles.profileImage}
      />

      {/* Profile Information */}
      <Text style={styles.name}>Rheffe S. Labajo</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.details}>Age: <Text style={styles.infoValue}>22</Text></Text>
        <Text style={styles.details}>School: <Text style={styles.infoValue}>Consolatrix College</Text></Text>
        <Text style={styles.details}>Course: <Text style={styles.infoValue}>BSIT</Text></Text>
        <Text style={styles.details}>Cellphone: <Text style={styles.infoValue}>0912345678</Text></Text>
      </View>

      {/* Buttons for additional features */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Link href ="/login">
          <Text style={styles.buttonText}>Logout</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => alert('Switching account...')}>
          <Text style={styles.buttonText}>Switch Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff', // Light background
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes the image circular
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#1db954', // Vibrant green border
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0059b3', // Darker blue
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    width: '100%',
  },
  details: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  infoValue: {
    fontWeight: 'bold',
    color: '#1db954', // Vibrant green
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#0059b3', // Vibrant blue
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
