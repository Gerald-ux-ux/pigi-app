import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import {
  ArrowDownIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ArrowsUpDownIcon,
} from "react-native-heroicons/solid";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Bell from "../components/Bell";
import { useNavigation } from "@react-navigation/native";
import ExchangeRates from "../components/ExhangeRates";

const WithdrawScreen = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  const navigation = useNavigation();

  const handlePress = () => {
    [navigation.navigate("WithdrawalSummary")];
  };

  return (
    <SafeAreaView className="flex-1 pt-8">
      {/* ============= Correct Header section =========== */}
      <View className="pb-6">
        <View className="flex-row justify-center items-center mx-6 ">
          <TouchableOpacity
            className="bg-white rounded-full p-1 absolute left-0"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={22} color="#000000" />
          </TouchableOpacity>
          <Text className="font-bold text-base">Withdrawal Amount</Text>
          <Bell />
        </View>
      </View>

      <View className="bg-white flex-1 pt-4 rounded-t-3xl ">
        <View className="flex-row mx-6">
          <Text className="text-[#817f7f]">Total portfolio</Text>
          <Text className="text-[#817f7f] absolute right-0">KES 54,512.60</Text>
        </View>

        <View className="bg-[#F5F7FA] my-6 mx-4 rounded-xl p-2 ">
          <Text className="text-[#817f7f] font-medium absolute top-6 left-4">
            USD
          </Text>
          <TextInput
            placeholder="200"
            textAlign="right"
            keyboardType="numeric"
            className=" rounded-3xl p-4  "
            returnKeyType="done"
          />
        </View>

        <View className="flex-row justify-center -my-4">
          <View className="bg-[#343558] rounded-full p-2 mx-4">
            <TouchableOpacity>
              <ArrowsUpDownIcon color="#fff" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-[#F5F7FA] my-6 mx-4 rounded-xl p-2 ">
          <Text className="text-[#817f7f] font-medium absolute top-6 left-4">
            KES
          </Text>
          <TextInput
            placeholder="25, 000"
            textAlign="right"
            keyboardType="numeric"
            className=" rounded-3xl p-4  "
            returnKeyType="done"
          />
        </View>

        <ExchangeRates />
        <TouchableOpacity
          className="flex-1"
          onPress={() => navigation.navigate("MpesaWithdrawal")}
        >
          <View className="bg-[#F5F7FA] my-2 mx-4 rounded-3xl p-6 items-start justify-center ">
            <Text className="text-[#323232] font-medium  ">
              John’s Mastercard ****2134
            </Text>

            <View className="absolute right-4">
              <ChevronDownIcon size={22} color="#000" />
            </View>
            {/* ============= Dropdownselect =========== */}
          </View>
        </TouchableOpacity>
        <View className="pb-3">
          <TouchableOpacity
            className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
            onPress={handlePress}
          >
            <Text className="text-[#343558] text-lg text-center">Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WithdrawScreen;
