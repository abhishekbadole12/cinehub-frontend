import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { getMovieDetails } from "../../lib/api/movieApi";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export interface IMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type?: string; // sometimes TMDB returns it, sometimes not
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState<IMovie>();
  const { theme } = useTheme();

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await getMovieDetails(Number(id));
        setMovie(data.movie);
      }
    })();
  }, [id]);
console.log(movie?.backdrop_path);

  if (!movie) return <Text>Loading...</Text>;

  return (
    <ScrollView
      className={`flex-1 ${theme === "dark" ? "bg-black" : "bg-white"}`}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
        className="w-full h-96"
      />
      <View className="p-4">
        <Text
          className={`text-2xl font-bold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {movie.title}
        </Text>
        <Text
          className={`mt-2 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {movie.overview}
        </Text>
      </View>
    </ScrollView>
  );
}