import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
  // Sample posts data with 4 IDs
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Urban Records',
      avatarUri: 'https://i.pinimg.com/564x/d5/be/72/d5be721c8ade93c2afee0d7f3eef2012.jpg',
      title: 'Industry Reports',
      content:
        'Industry news reveals how Diddy and Beyoncé are reportedly connected to unresolved issues surrounding the death of Michael Jackson...',
      imageUri: 'https://i.ytimg.com/vi/axY8-sbyQUg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAWD7gf42lgbPCL2uSIFV0td-2oqg',
      isFollowing: false,
    },
    {
      id: 2,
      author: 'NBC News',
      avatarUri: 'https://i.pinimg.com/564x/4e/7c/ed/4e7ced7fd36f4ae5f841d348c7395a53.jpg',
      title: 'Pop Culture News',
      content:
        'As new reports emerge, the ties between major players like Diddy and Beyoncé to past controversies are sparking heated debate...',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEY--Hwk_QddBFXLhp7YBn-0C2PIQrxynhQ&s',
      isFollowing: false,
    },
    {
      id: 3,
      author: 'PressForum Tagline',
      avatarUri: 'https://i.pinimg.com/236x/72/c9/d2/72c9d22fbbcfb0929c732f60c6907141.jpg',
      title: 'Hollywood News',
      content:
        'Officials seized more than 1,000 bottles of baby oil and lubricant from Diddy\'s homes in Miami and Los Angeles during raids in March 2024 that were allegedly used in "Freak Offs."',
      imageUri: 'https://i.ytimg.com/vi/5e_YJ-RwE-k/maxresdefault.jpg',
      isFollowing: false,
    },
    {
      id: 4,
      author: 'Rolling Stone',
      avatarUri: 'https://i.pinimg.com/564x/28/86/09/288609f8ac3022f371a6de659e6d76cc.jpg',
      title: 'HipHop News',
      content:
        'Sean “Diddy” Combs was envious of the friendly relationship between Tupac Shakur and The Notorious B.I.G. in the years before their deaths, according to a new report.',
      imageUri: 'https://people.com/thmb/XDJx-DJ0KcdIA84R2EiIiit8Kto=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(729x341:731x343):format(webp)/Tupac-Diddy-Biggie-tout-052924-e4e761cdd2914e99b9e42f63d9aaa773.jpg',
      isFollowing: false,
    },
  ]);

  // Function to handle follow/unfollow action for a specific post
  const handleFollowToggle = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const newFollowState = !post.isFollowing;
          // Show specific alert based on follow/unfollow
          if (newFollowState) {
            Alert.alert(
              'Following is success!',
              `You will now see more updates from ${post.author}.`,
              [{ text: 'See more', onPress: () => console.log('See more pressed') }]
            );
          } else {
            Alert.alert(
              'You have unfollowed this account.',
              `You will no longer receive updates from ${post.author}.`,
              [{ text: 'OK', onPress: () => console.log('Unfollow pressed') }]
            );
          }
          return { ...post, isFollowing: newFollowState };
        }
        return post;
      })
    );
  };

  return (
    <View className="flex-1 bg-[#111111]">
      {/* Scrollable News Feed */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {posts.map((post) => (
          <View key={post.id} className="bg-[#222222] p-4 mb-4 rounded-lg mx-4 mt-6">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-2">
              <View className="flex-row items-center">
                <Image
                  source={{ uri: post.avatarUri }}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <View>
                  <Text className="text-white text-[16px] font-bold">{post.author}</Text>
                  <Text className="text-[#888888] text-[12px]">{post.title}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => handleFollowToggle(post.id)}
                className="bg-[#35d0ba] py-2 px-4 rounded-full"
              >
                <Text className="text-white text-[14px] font-bold">
                  {post.isFollowing ? 'Following' : 'Follow'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Post Content */}
            <Text className="text-white text-[14px] mb-2">{post.content}</Text>
            <Image
              source={{ uri: post.imageUri }}
              className="w-full h-40 rounded-lg mb-2"
            />

            {/* Interaction Section */}
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <FontAwesome name="heart" size={20} color="white" className="mr-2" />
                <Text className="text-white text-[12px]">1.9k</Text>
                <FontAwesome name="comment" size={20} color="white" className="ml-4 mr-2" />
                <Text className="text-white text-[12px]">150 responses</Text>
              </View>
              <FontAwesome name="share" size={20} color="white" />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
