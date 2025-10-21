import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string | null;
}

export default function MovieCard({ id, title, posterPath }: MovieCardProps) {
  const router = useRouter();

  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <TouchableOpacity
      onPress={() => router.push(`/movie/${id}`)}
      className="w-[140px] mr-4"
    >
      <Image
        source={{ uri: imageUrl }}
        className="w-[140px] h-[210px] rounded-2xl"
        resizeMode="cover"
      />
      
      <Text
        className="text-white text-sm font-semibold mt-2 ml-2 text-start"
        numberOfLines={1}
      >
        {title}
      </Text>

      {/* Book Now button */}
      <TouchableOpacity className="mt-2.5 bg-red-500 py-2 rounded-full">
        <Text className="text-center text-white text-sm font-semibold">
          Book Now
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
