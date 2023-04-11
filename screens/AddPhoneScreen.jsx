import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { CountryFlag } from "react-native-flag-creator";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const AddPhoneScreen = () => {
  const handleOnpress = () => {
    [navigation.navigate("PhoneOtp")];
  };

  //Keyboard Behaviour//

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (text) => {
    if (/^\d{0,9}$/.test(text)) {
      setPhoneNumber(text);
      if (text.length === 9) {
        Keyboard.dismiss();
      }
    }
  };
  // y

  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1 pt-8">
      {/* ============= Header =========== */}
      <View className="mx-4 justify-center pb-8">
        <Text className="pl-2 text-4xl text-[#333333]">Add a phone</Text>
        <Text className="pl-2 pt-2 text-2xl text-[#333333]">
          or add it later in Settings
        </Text>
      </View>

      {/* ============= Phone & Country Input =========== */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView className='flex-1'>
          <View className="flex-1 items-center justify-center">
            <View className="flex-row pb-8 items-center">
              <View className="bg-[#f5f7fa] p-3 items-center justify-center rounded-2xl mx-2">
                <CountryFlag
                  countryCode="KE"
                  className="h-10 w-10 rounded-3xl"
                  style={{
                    backgroundColor: "gray",
                    opacity: 0.9,
                  }}
                />
              </View>

              <View className="flex-row bg-[#f5f7fa] p-2 rounded-2xl items-center">
                <Text className="text-[#000000] font-bold">+254</Text>
                <TextInput
                  style={{
                    width: 200,
                  }}
                  placeholder="Enter Phone Number"
                  keyboardType="numeric"
                  className="bg-[#f5f7fa] rounded-2xl p-4  "
                  value={phoneNumber}
                  maxLength={9}
                  onChangeText={handlePhoneNumberChange}
                ></TextInput>
              </View>
            </View>

            <View className="pb-36">
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text className="underline underline-offset-8 text-[#343558] text-center">
                  Add number later
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* ============= Confirm button  =========== */}

        <View className="pb-3 mx-8">
          <TouchableOpacity
            className="bg-[#60D19A]  p-3 rounded-full items-center justify-center"
            onPress={handleOnpress}
          >
            <Text className="text-[#252642] text-lg text-center">Confirm</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddPhoneScreen;
