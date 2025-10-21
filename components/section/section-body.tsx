import { ScrollView } from "react-native";
import React from "react";
//
import MovieCard from "../movie-section/movie-cards";
//
import { Movie } from "@/types/movie";

const SectionBody = ({ items }: { items: Movie[] }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="px-4 space-x-4 my-2"
    >
      {items.map((item) => (
        <MovieCard
          key={item.id}
          id={item.id}
          title={item.title}
          posterPath={item.poster_path}
        />
      ))}
    </ScrollView>
  );
};

export default SectionBody;
