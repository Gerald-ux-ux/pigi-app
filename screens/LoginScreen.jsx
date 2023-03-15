import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Checkbox from "expo-checkbox";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [isSelected, setSelection] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [isValid, setValid] = useState(false);

  const handlePress = () => {
    [navigation.navigate('Otp')]
    if (!isValid) {
      setAlertVisible(true);
      return;
    } else !isValid === true;
    setAlertVisible(false);
  };
  return (
    <>
      <SafeAreaView className="bg-white flex-1">
        <View className="py-4 pl-2">
          <Text className="pl-2 text-4xl">Welcome back</Text>
          <Text className="pl-2 pt-2 text-2xl">
            Log back in to your account
          </Text>
        </View>
        <View className="px-4 pt-8">
          <TextInput
            className="text-[#333333] bg-[#F5F7FA] p-6 rounded-2xl"
            placeholder="Email Address"
            //   onChangeText={(text) => setValid(text !== "")}
          />
        </View>
        <View className="px-4 pt-4">
          <TextInput
            className="text-[#333333] bg-[#F5F7FA] p-6 rounded-2xl "
            placeholder="Password"
            onChangeText={(text) => setValid(text !== "" && isValid)}
          />
        </View>

        <View className="flex-row items-center pl-6 pt-8 ">
          <Checkbox
            value={isSelected}
            onValueChange={setSelection}
            color={isSelected ? "#333333" : undefined}
          />
          <Text className="text-sm pl-2 font-[400] text-[#343558]">
            Remember me on this device
          </Text>
        </View>
        <View className='pt-12 '>
          <View className="px-4 pt-28 flex-row items-center justify-center">
            <Text className="text-center text-sm p-1 text-[#333333]">
              Don't have an account?{""}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateAccount")}
            >
              <Text className="underline underline-offset-8 text-[#333333]">
                Create one
              </Text>
            </TouchableOpacity>
          </View>
          <View className={`pt-4 px-6 ${isSelected ? "" : "opacity-50"}`}>
            <TouchableOpacity
              className="bg-[#60D19A] p-3 rounded-full items-center justify-center"
              onPress={handlePress}
              disabled={!isSelected}
            >
              <Text className="text-[#252642] text-lg text-center">Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
