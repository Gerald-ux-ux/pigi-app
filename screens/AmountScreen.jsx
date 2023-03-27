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
  ArrowsUpDownIcon,
} from "react-native-heroicons/outline";
import Bell from "../components/Bell";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import ExchangeRates from "../components/ExhangeRates";

import { Picker } from "@react-native-picker/picker";
import SelectDropdown from "react-native-select-dropdown";

const AmountScreen = () => {

const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  const navigation = useNavigation();
  const handlePress = () => {};

  return (
    <SafeAreaView className="flex-1 pt-8">
      {/* ============= Investment Amount =========== */}
      <View className="mx-4 flex-row  pb-12 ">
        <TouchableOpacity
          className="bg-white rounded-full p-1"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={22} color="#000000" />
        </TouchableOpacity>
        <View className="items-center justify-center mx-16 ">
          <Text className="text-center text-[#4F4F4F] text-x font-bold">
            Investment Amount
          </Text>
        </View>
        <Bell />
      </View>

      <View className="bg-white flex-1 pt-4 rounded-t-3xl">
        <View className="flex-row bg-[#f5f7fa] p-2 mx-4 rounded-xl items-center">
          <Text className="text-[#817f7f] font-bold">USD</Text>
          <TextInput
            style={{
              width: 200,
            }}
            placeholder="200"
            textAlign="right"
            keyboardType="numeric"
            className=" rounded-3xl p-4  "
            returnKeyType="done"
            onSubmitEditing={() => Keyboard.dismiss()}
          ></TextInput>
        </View>

        <View className="bg-[#343558] rounded-full absolute left-44 top-20  items-center h-8 w-8  justify-center">
          <TouchableOpacity
            className="items-center justify-center"
            onPress={handlePress}
          >
            <ArrowsUpDownIcon color="#FFFF" />
          </TouchableOpacity>
        </View>

        <View className="my-8">
          <View className="flex-row bg-[#f5f7fa] p-2 mx-4 rounded-xl items-center">
            <Text className="text-[#817f7f] font-bold">KES</Text>
            <TextInput
              style={{
                width: 200,
              }}
              placeholder="200"
              textAlign="right"
              keyboardType="numeric"
              className=" rounded-3xl p-4  "
              returnKeyType="done"
              onSubmitEditing={() => Keyboard.dismiss()}
            ></TextInput>
          </View>
        </View>
        <ExchangeRates />
        {/* <View className="">
          <View className="flex-row ">
            <Text className="font-normal mx-6 text-[#817f7f]">
              Today's rate
            </Text>
            <Text className="absolute right-0 mx-6 text-[#817f7f] font-medium">
              1 USD = 124.55 KES
            </Text>
          </View>
          <View style={styles.border} className="pt-4" />
        </View> */}
        <View className="flex-row pt-2 items-center">
          <Text className="text-[#817f7f] mx-6">Investment Product</Text>
          <Text className="mx-6 absolute right-0">Fund?</Text>
        </View>
        <View className="bg-[#F5F7FA] mx-4">
          <SelectDropdown
            className="my-2"
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>
        <View style={styles.border} className="pt-4" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  border: {
    borderBottomColor: "#C9C9C9",
    borderBottomWidth: 1,
  },
  selectDropdown: {
    paddingTop: 4,
  }
});

export default AmountScreen;
