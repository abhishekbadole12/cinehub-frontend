import { Image, ScrollView, View } from "react-native";
//
import { useDimensionsContext } from "@/context/useDimensionContext";

interface Props {
  images: string[];
}

export default function Carousel({ images }: Props) {
  const { cardWidth, cardHeight } = useDimensionsContext();

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={cardWidth + 16}
      contentContainerStyle={{ paddingHorizontal: 8 }}
      className="mt-4"
    >
      {images.map((img, idx) => (
        <View
          key={idx}
          style={{
            width: cardWidth,
            height: cardHeight,
            marginHorizontal: 8,
            borderRadius: 16,
            overflow: "hidden",
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 4 },
            elevation: 4,
          }}
        >
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w780${img}` }}
            style={{ width: "100%", height: "100%", borderRadius: 16 }}
            resizeMode="cover"
          />
        </View>
      ))}
    </ScrollView>
  );
}
