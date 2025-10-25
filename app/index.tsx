import { Redirect } from "expo-router";

export default function Index() {
  // redirect the root path ("/") to "/(tabs)"
  return <Redirect href="/sign-in" />;
}