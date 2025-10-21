import { Tabs } from "expo-router";
import { House, Film, Ticket, User } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ef4444",
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "#1f1f1f",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <House size={20} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="cinemas"
        options={{
          title: "Cinemas",
          tabBarIcon: ({ color }) => <Film size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          title: "My Tickets",
          tabBarIcon: ({ color }) => <Ticket size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <User size={20} color={color} />,
        }}
      />
    </Tabs>
  );
}
