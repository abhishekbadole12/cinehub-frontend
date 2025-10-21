import { Image, ScrollView, View } from "react-native";

interface Props {
  images: string[];
}

export default function Carousel({ images }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      className="mt-4"
    >
      {images.map((img, idx) => (
        <View key={idx} className="mx-2">
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w780${img}` }}
            className="w-[350px] h-[200px] rounded-2xl"
            resizeMode="cover"
          />
        </View>
      ))}
    </ScrollView>
  );
}