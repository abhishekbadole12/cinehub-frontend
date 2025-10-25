import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Checkbox } from "expo-checkbox";
//
import { LucideMail, Lock } from "lucide-react-native";
//
import FormField from "@/components/common/form-field";
import CustomButton from "@/components/common/custom-button";

const SignIn = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (key: "email" | "password", value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // HandleSubmit
  const handleSubmit = async () => {};

  return (
    <SafeAreaView className="flex-1 bg-[#0d0d0d]">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="mt-16 px-4">
          {/* Header */}
          <Text className="text-white text-3xl text-center font-bold">
            Welcome Back 👋
          </Text>
          <Text className="text-gray-400 text-center mt-2">
            Please log in to continue
          </Text>

          {/* Form Fields */}
          <View className="mt-12">
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(text) => handleChange("email", text)}
              Icon={LucideMail}
              keyboardType="email"
              placeholder="Enter your email"
              otherStyles="mb-6"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(text) => handleChange("password", text)}
              Icon={Lock}
              placeholder="Enter your password"
              secureTextEntry
              otherStyles="mb-4"
            />

            {/* Error Message */}
            {/* {error ? (
              <Text className="text-red-500 mt-3 text-sm text-center">
                {error}
              </Text>
            ) : null} */}

            <View className="flex-row justify-between items-center my-3">
              <TouchableOpacity
                activeOpacity={0.8}
                className="flex-row items-center space-x-2"
              >
                <Checkbox className="mr-3" />

                <Text className="text-gray-300 text-base">Remember me</Text>
              </TouchableOpacity>

              {/* Forgot Password */}
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => router.push("/forgot-password")}
              >
                <Text className="text-gray-300 text-base font-medium">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign Up Navigation */}
            <TouchableOpacity
              onPress={() => router.push("/sign-up")}
              className="flex-row justify-center my-8"
            >
              <Text className="text-gray-300 text-base">
                Don’t have an account?{" "}
              </Text>

              <Text className="text-primary text-base font-semibold">
                Sign Up
              </Text>
            </TouchableOpacity>

            {/* Log In Button */}
            <CustomButton
              title="Log In"
              handlePress={handleSubmit}
              containerStyles="my-8 bg-primary"
              loaderColor="#111"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
