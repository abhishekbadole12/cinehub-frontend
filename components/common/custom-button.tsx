import { Image, Text, ActivityIndicator, Pressable } from "react-native";
import React from "react";
// import { icons } from "@/constants";

interface ICustomButton {
  title: string;
  handlePress: any;
  containerStyles: any;
  textStyles?: string;
  loaderColor?: string;
  isLoading?: boolean;
  isGoogleButton?: boolean;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  loaderColor,
  isLoading,
  isGoogleButton = false,
}: ICustomButton) => {
  return (
    <Pressable
      onPress={handlePress}
      className={`bg-primary rounded-lg min-h-14 flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-75" : ""
      }`}
      disabled={isLoading}
    >

      <Text className={`text-white font-semibold text-base ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color={loaderColor ? loaderColor : "#fff"}
          size="small"
          className="ml-2"
        />
      )}
    </Pressable>
  );
};

export default CustomButton;
