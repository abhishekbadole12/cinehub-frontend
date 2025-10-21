import React from "react";
import { View } from "react-native";
import SectionHeader from "./sectional-header";
import SectionBody from "./section-body";
import { Movie } from "@/types/movie";

interface SectionProps {
  title: string;
  items: Movie[];
  onPress?: () => void;
}

const Section = ({ title, items, onPress }: SectionProps) => {
  if (!items || items.length === 0) return null;

  return (
    <View className="mt-4">
      <SectionHeader title={title} onPress={onPress} />
      <SectionBody items={items} />
    </View>
  );
};

export default Section;