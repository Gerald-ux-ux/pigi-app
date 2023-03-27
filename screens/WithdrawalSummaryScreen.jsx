import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Bell from "../components/Bell";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const WithdrawalSummaryScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 pt-8 ">
      {/* ============= Header section =========== */}
      <View className=" flex-row items-center justify-center  pb-12 ">
        <View className="flex-row">
          <TouchableOpacity
            className="bg-white rounded-full p-1"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={22} color="#000000" />
          </TouchableOpacity>
          <View className="items-center justify-center mx-28">
            <Text className="font-bold text-base">Summary</Text>
          </View>

          <Bell />
        </View>
      </View>
      <View className="bg-white flex-1 pt-4 rounded-t-3xl "></View>
    </SafeAreaView>
  );
};

export default WithdrawalSummaryScreen;
