import { View, Text, TextInput, Image, Pressable } from "react-native";
import React, { useState } from "react";
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
  secureTextEntry,
  ...props
}: IFormField) => {
  const [showPassword, setShowPassword] = useState(false);
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
        className={`w-full h-14 px-4 rounded-lg bg-slate-200 flex flex-row items-center  focus:border-zinc-500 ${
          errorMsg ? "border-2 border-red-600 " : ""
        }`}
      >
        <Icon size={18} color="#aaa" />

        <TextInput
          className={`w-full max-w-[91%] text-base font-semibold leading-5 ml-3 ${textStyles} ${
            editable ? "text-zinc-800" : "text-gray-500"
          }`}
          inputMode={keyboardType}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={editable}
          {...props}
        />

        {/* When Passoword */}
        {title === "Password" && value !== "" && (
          <Pressable onPress={togglePasswordVisibility}>
            {/* <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
              // tintColor="#71717A"
              tintColor={errorMsg ? "#dc2626" : "#000"}
            /> */}
          </Pressable>
        )}

        {/* Error Msg */}
        {errorMsg && (
          // <Text className="text-xs font-medium text-red-500 absolute -bottom-[18px] left-2">
          <Text className="text-xs font-medium text-red-600 absolute -bottom-[18px] left-2">
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
