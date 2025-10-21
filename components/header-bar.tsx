import { View, Text, Image, TouchableOpacity } from "react-native";
import { Bell, CircleChevronDown } from "lucide-react-native";

export default function HeaderBar() {
  return (
    <View className="flex-row items-center justify-between px-4">
      {/* Location */}
      <View className="flex-row items-center space-x-3">
        <View>
          <Text className="text-gray-400 text-xs">Your location</Text>

          <TouchableOpacity className="flex-row items-center gap-2">
            <Text className="text-lg font-semibold text-white">New York</Text>
            <CircleChevronDown size={14} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Notification */}
      <TouchableOpacity className="p-2.5 rounded-full border border-gray-700">
        <Bell size={22} color="#ef4444" />
      </TouchableOpacity>
    </View>
  );
}
