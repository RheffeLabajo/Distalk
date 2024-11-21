import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Link} from 'expo-router';

const Register = () => {
  return (
    <ScrollView>
    <View className="flex-1 bg-[#111111] p-4">
      <Text className="text-[#fefed5] text-[24px] font-pitalic mb-6">Sign up at Distalk</Text>

      {/* First Name */}
      <View className="mb-4">
        <Text className="text-[#fefed5] text-[16px]">First Name</Text>
        <View className="flex-row items-center bg-[#333333] p-4 mt-2 rounded-md">
          <Ionicons name="person-outline" size={20} color="#888888" />
          <TextInput
            className="bg-transparent text-[#fefed5] pl-2"
            placeholder="First Name"
            placeholderTextColor="#888888"
          />
        </View>
      </View>

      {/* Last Name */}
      <View className="mb-4">
        <Text className="text-[#fefed5] text-[16px]">Last Name</Text>
        <View className="flex-row items-center bg-[#333333] p-4 mt-2 rounded-md">
          <Ionicons name="person-outline" size={20} color="#888888" />
          <TextInput
            className="bg-transparent text-[#fefed5] pl-2"
            placeholder="Last Name"
            placeholderTextColor="#888888"
          />
        </View>
      </View>

      {/* Birthday */}
      <View className="mb-4">
        <Text className="text-[#fefed5] text-[16px]">Birthday</Text>
        <TextInput
          className="bg-[#333333] text-[#fefed5] p-4 mt-2 rounded-md"
          placeholder="MM/DD/YYYY"
          placeholderTextColor="#888888"
        />
      </View>

      {/* Email */}
      <View className="mb-4">
        <Text className="text-[#fefed5] text-[16px]">Email</Text>
        <View className="flex-row items-center bg-[#333333] p-4 mt-2 rounded-md">
          <Ionicons name="mail-outline" size={20} color="#888888" />
          <TextInput
            className="bg-transparent text-[#fefed5] pl-2"
            placeholder="Email"
            placeholderTextColor="#888888"
          />
        </View>
      </View>

      {/* Password */}
      <View className="mb-4">
        <Text className="text-[#fefed5] text-[16px]">Password</Text>
        <View className="flex-row items-center bg-[#333333] p-4 mt-2 rounded-md">
          <Ionicons name="lock-closed-outline" size={20} color="#888888" />
          <TextInput
            className="bg-transparent text-[#fefed5] pl-2"
            placeholder="Password"
            placeholderTextColor="#888888"
            secureTextEntry={true}
          />
        </View>
      </View>

      {/* Agree and Continue Button */}
      <TouchableOpacity className="bg-[#35d0ba] flex-1 items-center justify-center py-4 rounded-full mt-6">
        <Link href = "/login">
        <Text className="text-white text-[20px] font-bold text-center">Agree and continue</Text>
        </Link>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default Register;
