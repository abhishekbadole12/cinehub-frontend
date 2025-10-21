import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import "../global.css";

import { ThemeProvider, useTheme } from "@/context/ThemeContext";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  // const colorScheme = useColorScheme();

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme === "dark" ? "#000" : "#fff" },
          headerTintColor: theme === "dark" ? "#fff" : "#000",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}
