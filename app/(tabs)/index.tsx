import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { getTrendingMovies } from "../../lib/api/movieApi";
//
import HeaderBar from "@/components/header-bar";
import Carousel from "@/components/crousel";
import Section from "@/components/section/section";
//
import { Movie } from "@/types/movie";

export default function HomeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      const trending = await getTrendingMovies();
      setMovies(trending.slice(0, 10)); // limit for display
    })();
  }, []);

  const posters = movies.slice(0, 5).map((m) => m.backdrop_path) as string[];

  return (
    <SafeAreaView className="flex-1 bg-black pb-2" edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar />

        {posters.length > 0 && <Carousel images={posters} />}

        <Section title="Now Playing" items={movies} />

        <Section title="Coming Soon" items={movies} />
      </ScrollView>
    </SafeAreaView>
  );
}
