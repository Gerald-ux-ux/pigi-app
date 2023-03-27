import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import Bell from "../components/Bell";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

import ToggleSwitch from "toggle-switch-react-native";
import Toggle from "../components/Toggle";
const AddMpesaScreen = () => {
  const [isSelected, setSelected] = useState();

  const handlePress = () => [navigation.navigate("Bank")];

  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (text) => {
    if (/^\d{0,9}$/.test(text)) {
      setPhoneNumber(text);
      if (text.length === 9) {
        Keyboard.dismiss();
      }
    }
  };
  return (
    <SafeAreaView className="flex-1 pt-8 ">
      {/* ============= Header section =========== */}
      <View className="mx-4 flex-row  pb-12 ">
        <TouchableOpacity
          className="bg-white rounded-full p-1"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={22} color="#000000" />
        </TouchableOpacity>

        <Bell />
      </View>

      <View className="bg-white flex-1 pt-4 rounded-t-3xl ">
        <Text className="text-center text-[#333333] font-bold text-sm">
          Add new M-Pesa account
        </Text>

        <View className="py-6 mx-4 ">
          <View className="pb-4">
            <Text className="text-[#333333] font-medium text-sm pb-2">
              Display Name/Alias
            </Text>
            <TextInput
              className="bg-[#F5F7FA]  p-4 rounded-3xl"
              placeholder="John Barasa"
            />
          </View>

          <Text className="text-[#333333] font-medium text-sm pb-2">
            M-Pesa Phone Number
          </Text>
          <View className="flex-row bg-[#f5f7fa]  rounded-3xl items-center">
            <Text className="text-[#000000] pl-4 font-bold">+254</Text>
            <TextInput
              style={{
                width: 200,
              }}
              placeholder="700 000 000"
              keyboardType="numeric"
              className="bg-[#f5f7fa] rounded-2xl p-4  "
              returnKeyType="done"
              value={phoneNumber}
              maxLength={9}
              onChangeText={handlePhoneNumberChange}
            ></TextInput>
          </View>

          <View className="pt-4">
            <Text className="text-[#333333] font-medium text-sm pb-2">
              M-Pesa Account Name
            </Text>
            <TextInput
              className="bg-[#F5F7FA]  p-4 rounded-3xl"
              placeholder="Will update automatically"
            />
          </View>
        </View>
        {/* ============= Toggle section =========== */}
        <Toggle />

        <View className="justify-center pb-4 mx-6">
          <Text className="text-xs text-center text-[#a7a7a7]">
            *We will request KES 125 in order to verify the account, don’t
            worry, we’ll refund it immediately
          </Text>
        </View>
        <View className="pb-6">
          <TouchableOpacity
            className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
            onPress={handlePress}
          >
            <Text className="text-[#F2FAFF] text-lg text-center">
              Add Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddMpesaScreen;
