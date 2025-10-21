import { View, Text, TouchableOpacity } from "react-native";
import { ChevronRight } from "lucide-react-native";

interface Props {
  title: string;
  onPress?: () => void;
}

export default function SectionHeader({ title, onPress }: Props) {
  return (
    <View className="flex-row justify-between items-center px-4 my-4">
      <Text className="text-xl font-semibold text-white">{title}</Text>

      {onPress && (
        <TouchableOpacity
          onPress={onPress}
          className="flex-row items-center active:opacity-70"
        >
          <Text className="text-primary font-medium mr-1">View All</Text>
          <ChevronRight size={16} color="#ef4444" />
        </TouchableOpacity>
      )}
    </View>
  );
}