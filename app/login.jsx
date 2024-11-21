import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Import Ionicons
import {Link} from 'expo-router'

const Login = () => {
  return (
    <ScrollView>
    <View className="flex-1 justify-center px-8 bg-[#111111]">
      {/* Header Text */}
      <Text className="text-[#fefed5] text-[24px] font-pitalic text-center mb-6">
        Log in to Distalk
      </Text>

      {/* Username Input */}
      <View className="flex-row items-center bg-[#333333] p-4 mt-2 rounded-md mb-4">
        <Ionicons name="person-outline" size={24} color="#888888" className="mr-2" />
        <TextInput
          className="flex-1 text-[#fefed5]"
          placeholder="Username"
          placeholderTextColor="#888888"
        />
      </View>

      {/* Password Input */}
      <View className="flex-row items-center bg-[#333333] p-4 mt-2 rounded-md mb-6">
        <Ionicons name="lock-closed-outline" size={24} color="#888888" className="mr-2" />
        <TextInput
          className="flex-1 text-[#fefed5]"
          placeholder="Password"
          placeholderTextColor="#888888"
          secureTextEntry={true} // Hides the password input
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity className="bg-[#35d0ba] flex items-center justify-center p-4 rounded-full mb-6">
        <Link href = "/home">
        <Text className="text-white text-center text-[18px] font-bold">
          Continue
        </Text>
        </Link>
      </TouchableOpacity>

      {/* Separator */}
      <View className="flex-row items-center justify-center mb-6">
        <View className="h-[1px] bg-[#333333] flex-1" />
        <Text className="text-[#888888] mx-4">or</Text>
        <View className="h-[1px] bg-[#333333] flex-1" />
      </View>

      {/* Continue with Email */}
      <TouchableOpacity className="bg-[#222222] p-4 rounded-full flex-row items-center justify-center mb-4">
      <FontAwesome name="envelope" size={25} color="red" style={{ marginRight: 10}} />
      <Link href ="https://signup.live.com/">
        <Text className="text-white text-center text-[16px] font-bold">
          CONTINUE WITH EMAIL
        </Text>
        </Link>
      </TouchableOpacity>

      {/* Continue with Apple */}
      <TouchableOpacity className="bg-[#222222] p-4 rounded-full flex-row items-center justify-center mb-4">
      <FontAwesome name="apple" size={25} color="white" style={{ marginRight: 10}} />
      <Link href ="https://appleid.apple.com/account">
        <Text className="text-white text-center text-[16px] font-bold">
          CONTINUE WITH APPLE
        </Text>
        </Link>
      </TouchableOpacity>

      {/* Continue with Google */}
      <TouchableOpacity className="bg-[#222222] p-4 rounded-full flex-row items-center justify-center mb-4">
        <FontAwesome name="google" size={25} color="green" style={{ marginRight: 10}} />
        <Link href="https://accounts.google.com/signup">
        <Text className="text-white text-center text-[16px] font-bold">
          CONTINUE WITH GOOGLE
        </Text>
        </Link>
      </TouchableOpacity>

      {/* Continue with Facebook */}
      <TouchableOpacity className="bg-[#222222] p-4 rounded-full flex-row items-center justify-center mb-4">
        <FontAwesome name="facebook" size={25} color="blue" style={{ marginRight: 10}} />
        <Link href="https://www.facebook.com/">
        <Text className="text-white text-center text-[16px] font-bold">
          CONTINUE WITH FACEBOOK
        </Text>
        </Link>
      </TouchableOpacity>

      {/* Log in */}
      <TouchableOpacity className="bg-[#35d0ba] flex items-center justify-center p-4 rounded-full mb-6">
        <Link href = "/register">
        <Text className="text-white text-lg font-bold text-center">No account? Register Here!</Text>
        </Link>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default Login;
