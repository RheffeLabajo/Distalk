import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  Stack } from 'expo-router'
import { useFonts} from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen } from 'expo-router'


const MainLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/Fonts/Poppins-Black.ttf"),
         "Poppins-Regular": require("../assets/Fonts/Poppins-Regular.ttf"),
         "Poppins-BoldItalic": require("../assets/Fonts/Poppins-BoldItalic.ttf"),
       
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      
  return (
    <>
   <Stack>
    <Stack.Screen name="index" options={{
        headerShown:true
    }}/>
   </Stack>
    
    </>
  )
}

export default MainLayout

const styles = StyleSheet.create({})