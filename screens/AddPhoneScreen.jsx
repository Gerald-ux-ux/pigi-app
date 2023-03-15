import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CountryFlag } from "react-native-flag-creator";
import { useNavigation } from "@react-navigation/native";

const AddPhoneScreen = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [isValid, setValid] = useState(false);

    
      const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="py-4 pl-2">
        <Text className="pl-2 text-4xl">Add a phone</Text>
        <Text className="pl-2 pt-2 text-2xl">or add it later in Settings</Text>
      </View>

      <View className="flex-row  px-4">
        <View className="bg-[#F5F7FA]  rounded-2xl p-2 ">
          <CountryFlag
            countryCode="KE"
            className="h-10 w-10 bg-[#F5F7FA] rounded-3xl"
            style={styles.countryFlag}
          />
        </View>
        <View className="px-2 justify-center flex-row">
          <Text className="p-4  font-bold text-[#000]text-center">+254</Text>
          <TextInput
            style={{
              width: 200,
            }}
            className="bg-[#f5f7fa] p-5 rounded-2xl pl-2 w-300"
            placeholder="Enter Phone Number"
            placeholderTextColor="#a6a6a6"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View className="">
        <TouchableOpacity className="py-8">
          <Text className="underline-offset-8 text-[#343558] text-center">
            Add number later
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center pt-4 text-[#333333]">
        We’ll text you a code to confirm this number
      </Text>
      <View className="pt-4 px-6">
        <TouchableOpacity
          className="bg-[#60D19A] p-3 rounded-full items-center justify-center"
          onPress={() => navigation.navigate("PhoneOtp")}
        >
          <Text className="text-[#252642] text-lg text-center">Send code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  countryFlag: {
    backgroundColor: "gray",
  },
});

export default AddPhoneScreen;
