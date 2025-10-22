import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
//
import { Play } from "lucide-react-native";
//
import { IMovieDetails } from "@/types/movie";

const TrailerSection = ({ URL }: { URL: any }) => {
  return (
    <View>
      <Text className="text-white text-lg font-semibold my-8">
        Watch Trailer
      </Text>
      <View className="relative">
        <Image
          source={{ uri: URL }}
          className="w-full h-52 rounded-xl"
          resizeMode="cover"
        />
        <TouchableOpacity className="absolute inset-0 justify-center items-center">
          <View className="bg-white/20 w-16 h-16 rounded-full justify-center items-center">
            <Play color="white" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrailerSection;
