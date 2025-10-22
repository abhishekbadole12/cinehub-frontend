import React from "react";
import { View, Text } from "react-native";
//
import { Calendar, CalendarFold, Languages, Star } from "lucide-react-native";
//
import {  IMovieDetails } from "@/types/movie";

const MetaInfo = ({ movie }: { movie: IMovieDetails }) => {
  return (
    <View className="my-8">
      <View className="w-full flex-row items-center mb-3">
        <CalendarFold color="gray" size={16} />

        <View className="flex-row items-center ml-2">
          <Text className="text-gray-300 text-sm">Release Date : </Text>
          <Text className="text-gray-400 text-sm">
            {movie.release_date || "N/A"}
          </Text>
        </View>
      </View>

      <View className="w-full flex-row items-center mb-3">
        <Calendar color="gray" size={16} className="" />

        <View className="w-full flex-row items-center ml-2">
          <Text className="text-gray-300 text-sm">Duration : </Text>
          <Text className="text-gray-400 text-sm">
            {movie.runtime
              ? `${Math.floor(movie.runtime / 60)}hr ${movie.runtime % 60}min`
              : "N/A"}
          </Text>
        </View>
      </View>

      <View className="w-full flex-row items-center mb-3">
        <Star color="gray" size={16} />

        <View className="w-full flex-row items-center ml-2">
          <Text className="text-gray-300 text-sm">Genres : </Text>
          <Text className="text-gray-400 text-sm">
            {movie.genres?.map((g) => g.name).join(", ") || "N/A"}
          </Text>
        </View>
      </View>

      <View className="w-full flex-row items-center">
        <Languages color="gray" size={16} />

        <View className="w-full flex-row items-center ml-2">
          <Text className="text-gray-300 text-sm">Language : </Text>
          <Text className="text-gray-400 text-sm">
            {movie.spoken_languages?.map((l) => l.english_name).join(", ") ||
              "N/A"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MetaInfo;
