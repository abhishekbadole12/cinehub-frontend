import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface MovieCardProps {
  title: string;
  posterPath: string | null;
  onPress: () => void;
}

const MovieCard = ({ title, posterPath, onPress }: MovieCardProps) => {
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <TouchableOpacity onPress={onPress} className="m-2 w-[150px]">
      <Image
        source={{ uri: imageUrl }}
        className="w-[150px] h-[225px] rounded-lg"
        resizeMode="cover"
      />
      <Text className="text-white text-center mt-2">{title}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;