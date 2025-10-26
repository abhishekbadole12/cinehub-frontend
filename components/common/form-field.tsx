import { View, Text, TextInput, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { LucideEye, LucideEyeOff } from "lucide-react-native";
// import { icons } from "../constants";

interface IFormField {
  title: string;
  fieldIndicator?: string;
  keyboardType?: "text" | "email" | "tel" | "none";
  value: string;
  placeholder?: string;
  Icon?: any;
  HeaderIcon?: any;
  maxLength?: number;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  textStyles?: string;
  errorMsg?: string;
  editable?: boolean;
  secureTextEntry?: boolean;
}

const FormField = ({
  title,
  fieldIndicator,
  value = "",
  placeholder = "",
  Icon,
  HeaderIcon,
  maxLength,
  handleChangeText,
  otherStyles = "",
  textStyles = "",
  errorMsg,
  editable = true,
  keyboardType = "none",
  secureTextEntry = false,
  ...props
}: IFormField) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <View className={`space-y-2 ${otherStyles} relative`}>
      <Text className="text-base text-white font-semibold mb-2.5">
        {title}
        {fieldIndicator && (
          <Text className="text-sm text-gray-400 font-normal">
            {" "}
            {fieldIndicator}
          </Text>
        )}
      </Text>

      <View
        className={`w-full h-14 px-4 rounded-lg bg-input-bg flex flex-row items-center border-2 border-input-bg  focus:bg-input-bg-focus focus:border-input-bg-focus ${
          errorMsg ? "border-red-600 " : ""
        }`}
      >
        <Icon size={18} color="#aaa" />

        <TextInput
          className={`w-full max-w-[88%] text-base font-semibold leading-5 ml-3 ${textStyles} ${
            editable ? "text-white" : "text-gray-500"
          }`}
          inputMode={keyboardType}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={editable}
          {...props}
        />

        {/* When Passoword */}
        {title === "Password" && value !== "" && (
          <Pressable onPress={togglePasswordVisibility}>
            {!showPassword ? <LucideEye size={18} color={"white"}/> : <LucideEyeOff size={18} color={"white"}/>}
          </Pressable>
        )}

        {/* Error Msg */}
        {errorMsg && (
          // <Text className="text-xs font-medium text-red-500 absolute -bottom-[18px] left-2">
          <Text className="text-sm font-medium text-red-600 absolute -bottom-[20px] left-2">
            {errorMsg}
          </Text>
        )}
      </View>

      {HeaderIcon !== "" && (
        <Image
          source={HeaderIcon}
          className="w-[16px] h-[16px] absolute -top-.5 right-1 opacity-90"
        />
      )}
    </View>
  );
};

export default FormField;
