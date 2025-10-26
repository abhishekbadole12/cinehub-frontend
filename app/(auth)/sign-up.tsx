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
import { useBoolean } from "@/hooks/use-boolean";

const SignUp = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { value: rememberMe, toggle } = useBoolean(false);

  const [errorMsg, setErrorMsg] = useState({ message: "" });

  // Handle input change
  const handleChange = (key: "email" | "password" | "name", value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // HandleSubmit
  const handleSubmit = async () => {
    console.log({
      ...form,
      rememberMe,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0d0d0d]">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="mt-16 px-4">
          {/* Header */}
          <Text className="text-white text-4xl text-center font-bold">
            Create account
          </Text>
          <Text className="text-gray-400 text-center mt-2">
            Sign up to unlock a world of movies and seamless ticket booking.
          </Text>

          {/* Form Fields */}
          <View className="mt-12">
            <FormField
              title="Full Name"
              value={form.name}
              handleChangeText={(text) => handleChange("name", text)}
              Icon={LucideMail}
              keyboardType="text"
              placeholder="Eg. John Doe"
              otherStyles="mb-6"
              errorMsg={errorMsg.message}
            />

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(text) => handleChange("email", text)}
              Icon={LucideMail}
              keyboardType="email"
              placeholder="Enter your email"
              otherStyles="mb-6"
              errorMsg={errorMsg.message}
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(text) => handleChange("password", text)}
              Icon={Lock}
              placeholder="Enter your password"
              secureTextEntry
              otherStyles="mb-4"
              errorMsg={errorMsg.message}
            />

            <View className="flex-row justify-between items-center my-3 px-1">
              <TouchableOpacity
                activeOpacity={0.8}
                className="flex-row items-center space-x-2"
              >
                <Checkbox
                  className="mr-3"
                  onValueChange={toggle}
                  value={rememberMe}
                />

                <Text className="text-gray-300 text-base">
                  I agree to Cinehub Terms & Conditions.
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign In Navigation */}
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              className="flex-row justify-center my-8"
            >
              <Text className="text-gray-300 text-base">
                Already have an account?{" "}
              </Text>

              <Text className="text-primary text-base font-semibold">
                Sign In
              </Text>
            </TouchableOpacity>

            {/* Log In Button */}
            <CustomButton
              title="Sign Up"
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

export default SignUp;
