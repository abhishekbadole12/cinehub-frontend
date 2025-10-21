import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../lib/api/movieApi";
import { useTheme } from "../context/ThemeContext";
import { useRouter } from "expo-router";

// Import the global.css file in the index.js file:
import "../global.css";

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

export default function HomeScreen() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await getTrendingMovies();
      setMovies(res || []);
    })();
  }, []);

  return (
    <View
      className={`flex-1 p-4 ${theme === "dark" ? "bg-black" : "bg-white"}`}
    >
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-1 m-2"
            onPress={() => router.push(`/movie/${item.id}`)}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
              className="w-full h-64 rounded-xl"
            />
            <Text
              className={` text-center mt-2 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
              numberOfLines={1}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
