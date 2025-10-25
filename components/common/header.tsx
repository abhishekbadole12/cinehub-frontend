import { View, Text, TouchableOpacity, Platform } from "react-native";
import { ArrowLeft, Share2, MoreVertical } from "lucide-react-native";
import { useRouter } from "expo-router";
import React from "react";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showShare?: boolean;
  showMore?: boolean;
  transparent?: boolean; // true for overlay headers
  onSharePress?: () => void;
  onMorePress?: () => void;
}

export default function CustomHeader({
  title,
  showBack = true,
  showShare = false,
  showMore = false,
  transparent = false,
  onSharePress,
  onMorePress,
}: HeaderProps) {
  const router = useRouter();

  return (
    <View
      className={`flex-row items-center justify-between px-4 pt-12 pb-3 ${
        transparent ? "absolute top-0 left-0 right-0 z-20" : "bg-black"
      }`}
      style={{
        backgroundColor: transparent ? "rgba(0,0,0,0)" : "#000",
      }}
    >
      {/* Left Button */}
      <View className="flex-row items-center">
        {showBack && (
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-black/50 p-2 rounded-full"
          >
            <ArrowLeft size={22} color="#fff" />
          </TouchableOpacity>
        )}
      </View>

      {/* Title (optional for normal headers) */}
      {title ? (
        <Text className="text-white text-lg font-semibold">{title}</Text>
      ) : (
        <View className="flex-1" />
      )}

      {/* Right Buttons */}
      <View className="flex-row">
        {showShare && (
          <TouchableOpacity
            onPress={onSharePress}
            className="bg-black/50 p-2 rounded-full"
          >
            <Share2 size={20} color="#fff" />
          </TouchableOpacity>
        )}
        {showMore && (
          <TouchableOpacity
            onPress={onMorePress}
            className="bg-black/50 p-2 rounded-full ml-2"
          >
            <MoreVertical size={20} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
