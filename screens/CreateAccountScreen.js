import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";


const CreateAccountScreen = () => {
  const [isSelected, setSelection] = useState(false);

  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="bg-white flex-1">
        {/* <TouchableOpacity className='py-2 px-2'>
          <ChevronLeftIcon size={30} color="#333333" />
        </TouchableOpacity> */}

        <View className="py-6 pl-2">
          <Text className="pl-2 text-4xl">Welcome</Text>
          <Text className="pl-2 pt-2 text-2xl">Create your new account</Text>
        </View>
        <View className="px-4 pt-8">
          <TextInput
            className="text-[#333333] bg-[#F5F7FA] p-4 rounded-2xl"
            placeholder="Full Name"
          />
        </View>
        <View className="px-4 pt-4">
          <TextInput
            className="text-[#333333] bg-[#F5F7FA] p-4 rounded-2xl"
            placeholder="Email Address"
          />
        </View>
        <View className="px-4 pt-4">
          <TextInput
            className="text-[#333333] bg-[#F5F7FA] p-4 rounded-2xl"
            placeholder="Password"
          />
        </View>
        <View className="px-4 pt-4">
          <TextInput
            className="text-[#333333] bg-[#F5F7FA] p-4 rounded-2xl"
            placeholder="Retype Password"
          />
        </View>

        <View className="px-4 flex-row items-center justify-center pt-4">
          <Checkbox
            value={isSelected}
            onValueChange={setSelection}
            color={isSelected ? "#333333" : undefined}
          />
          <Text className="text-sm  pt-2 pl-6 pr-3 font-[400] text-[#343558]">
            By signing up, you agree to the Terms of Service and Privacy Policy
          </Text>
        </View>
        <View className="px-4 pt-14 flex-row items-center justify-center">
          <Text className="text-center text-sm p-1 text-[#333333]">
            Don't have an account?{""}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text className="underline underline-offset-8">Log In</Text>
          </TouchableOpacity>
        </View>
        <View className="pt-3 px-6 ">
          <TouchableOpacity
            className="bg-[#60D19A] p-3 rounded-full items-center justify-center"
            // onPress={handlePress}
          >
            <Text className="text-[#252642] text-lg text-center">
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CreateAccountScreen;
