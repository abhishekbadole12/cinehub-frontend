import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { ArrowLeft, MoreVertical, Share2, Star } from "lucide-react-native";
//
import { getMovieDetails } from "../../lib/api/movieApi";
//

import { useDimensionsContext } from "@/context/useDimensionContext";
//
import { IMovieDetails } from "@/types/movie";
import MetaInfo from "@/components/movie-details/meta-info";
import ProductionInfo from "@/components/movie-details/production-info";
import TrailerSection from "@/components/movie-details/trailer-section";
import CustomHeader from "@/components/common/header";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const { width } = useDimensionsContext();
  const [movie, setMovie] = useState<IMovieDetails>();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await getMovieDetails(Number(id));
        setMovie(data.movie);
      }
    })();
  }, [id]);

  if (!movie) {
    return (
      <View className="flex-1 justify-center items-center bg-black">
        <Text className="text-white text-lg">Loading...</Text>
      </View>
    );
  }

  const IMG_URL = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView
      className="flex-1 bg-[#0d0d0d]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      {/* Hero Section */}
      <View className="">
        <Image
          source={{ uri: IMG_URL }}
          style={{ width, height: width * 0.85 }}
          className="rounded-b-3xl"
          resizeMode="cover"
        />

        <CustomHeader
          transparent
          showBack
          showShare
          showMore
          onSharePress={() => console.log("Share movie")}
        />
      </View>

      {/* Movie Info Section */}
      <View className="flex-1 px-4 mt-2">
        {/* Title & Rating */}
        <View className="flex-row justify-between items-center mt-6">
          <Text className="text-white text-2xl font-semibold flex-1 mr-2">
            {movie.title}
          </Text>
          <View className="flex-row items-center">
            <Star size={16} color="#FFD700" />
            <Text className="text-white text-sm font-medium ml-1">
              {movie.vote_average.toFixed(1)} / 10
            </Text>
          </View>
        </View>

        {movie.tagline ? (
          <Text className="text-gray-400 italic mb-4">"{movie.tagline}"</Text>
        ) : null}

        {/* Meta Info */}
        <MetaInfo movie={movie} />

        {/* Book Button */}
        <TouchableOpacity className="my-4 bg-[#1a1a1a] border border-gray-700 rounded-full py-3 flex-row justify-center items-center space-x-2">
          <Text className="text-white text-base font-medium">Book Now</Text>
        </TouchableOpacity>

        {/* Trailer Section */}
        {movie.backdrop_path || movie.poster_path ? (
          <TrailerSection URL={IMG_URL} />
        ) : (
          <View className="flex-1 justify-center items-center bg-black">
            <Text className="text-white text-lg">Loading...</Text>
          </View>
        )}

        {/* Synopsis */}
        <View className="mt-8">
          <Text className="text-white text-lg font-semibold mb-2">
            Synopsis
          </Text>
          <Text className="text-gray-400 leading-6">{movie.overview}</Text>
        </View>

        {/* Production Info */}
        <ProductionInfo movie={movie} />

        {/* Placeholder for Cast & Similar Movies */}
        <View className="mt-10">
          <Text className="text-white text-lg font-semibold mb-3">Cast</Text>
          <Text className="text-gray-500">Coming soon...</Text>
        </View>

        <View className="mt-10">
          <Text className="text-white text-lg font-semibold mb-3">
            Similar Movies
          </Text>
          <Text className="text-gray-500">Coming soon...</Text>
        </View>
      </View>
    </ScrollView>
    // </View>
  );
}
