import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View className="flex-1 justify-center items-center bg-[#111111]">
    <View className="flex-row justify-center items-center mb-12">
    <Image
        source={require('../assets/images/DistalkLogo.png')} 
        className="w-[70px] h-[70px] mr-4" 
        resizeMode="contain"
    />
        <Text className="text-[48px] text-[#fefed5] font-pitalic">
          Distalk
        </Text>
        </View>
        
        <View className="flex-row justify-between w-[80%]">
          <TouchableOpacity className="bg-[#35d0ba] py-4 px-8 rounded-full mr-4">
            <Link href="/login">
              <Text className="text-white text-[18px] font-bold">Login</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#35d0ba] py-4 px-8 rounded-full">
            <Link href="/register">
              <Text className="text-white text-[18px] font-bold">Register</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Index;
