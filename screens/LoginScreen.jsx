import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import LoginModal from "../components/ModalViews/LoginModal";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isSelected, setSelected] = useState();

  const handlePress = () => {
    [navigation.navigate("Email")];
  };
  

  return (
    <SafeAreaView className="flex-1 bg-white pt-8 ">
      {/* ============= Header =========== */}
      <View className="mx-4 flex justify-center pb-4">
        <Text className="text-[#333333] text-4xl ">Welcome back</Text>
        <Text className="text-[#333333] text-2xl ">
          Log back in to your account
        </Text>
      </View>
      {/* ============= Input Fields =========== */}
      <View className="flex-1">
        <View className="px-4 pb-4">
          <TextInput
            className=" bg-[#F5F7FA] p-6 text-start rounded-2xl"
            placeholder="Email Address"
          />
        </View>
        <View className="px-4 ">
          <TextInput
            className=" bg-[#F5F7FA] p-6 text-start rounded-2xl"
            placeholder="Password"
          />
        </View>
        <View className="flex-row mx-4 pt-4 flex-1">
          <Checkbox
            value={isSelected}
            onValueChange={setSelected}
            color={isSelected ? "#333333" : undefined}
          />
          <Text className="pb-2 pl-2 text-sm  text-[#343558]">
            Remember me on this device
          </Text>
        </View>
      </View>

      {/* ============= Footer =========== */}
      <View className="justify-center items-center">
        <View className="flex-row ">
          <Text className="text-[#343558]">Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateAccount")}
          >
            <Text className="underline  text-[#343558]">Create one</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className={`pt-4 px-6 pb-3 ${isSelected ? "" : "opacity-50"}`}>

        <TouchableOpacity
          className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
          onPress={handlePress}
          disabled={!isSelected}
        >
          <Text className="text-[#252642] text-lg text-center">Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default LoginScreen;
