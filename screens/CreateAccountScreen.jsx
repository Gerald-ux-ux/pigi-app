import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";

const CreateAccountScreen = () => {
  const handlePress = () => [navigation.navigate("Otp")];

  const navigation = useNavigation();
  const [isSelected, setSelected] = useState();
// is that return component okay considering screen sizes  and devices?
  return (
    
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={{ flex: 1 }}
    // >
      <SafeAreaView className="flex-1 bg-white pt-8 ">
        {/* ============= Header =========== */}

        <View className="flex-1">
          <View className="mx-4 flex justify-center pb-4">
            <Text className="text-[#333333] text-4xl ">Welcome</Text>
            <Text className="text-[#333333] text-2xl ">
              Create your new account
            </Text>
          </View>
          {/* ============= Input Fields =========== */}
          <ScrollView>
            <View className="px-4 pb-4">
              <TextInput
                className=" bg-[#F5F7FA] p-6 text-start rounded-2xl"
                placeholder="Full Name"
              />
            </View>
            <View className="px-4 ">
              <TextInput
                className=" bg-[#F5F7FA] p-6 text-start rounded-2xl"
                placeholder="Email Address"
              />
            </View>
            <View className="px-4 pt-4">
              <TextInput
                className=" bg-[#F5F7FA] p-6 text-start rounded-2xl"
                placeholder="Password"
              />
            </View>

            <View className="px-4 pt-4">
              <TextInput
                className=" bg-[#F5F7FA] p-6 text-start rounded-2xl"
                placeholder="Retype Password"
              />
            </View>

            <View className="flex-row mx-6 pt-4 flex-1">
              <Checkbox
                value={isSelected}
                onValueChange={setSelected}
                color={isSelected ? "#333333" : undefined}
              />
              <Text className="pl-2 text-sm  text-[#343558]">
                By signing up, you agree to the Terms of Service and Privacy
                Policy
              </Text>
            </View>
          </ScrollView>
          {/* ============= Footer =========== */}
          <View className=''>
            <View className="justify-center items-center ">
              <View className="flex-row">
                <Text className="text-[#343558]">Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text className="underline  text-[#343558]"> Log in</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              className={`pt-3 px-6 pb-3 ${isSelected ? "" : "opacity-50"}`}
            >
              <TouchableOpacity
                className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
                onPress={handlePress}
                disabled={!isSelected}
              >
                <Text className="text-[#252642] text-lg text-center">
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    // </KeyboardAvoidingView>
  );
};

export default CreateAccountScreen;
