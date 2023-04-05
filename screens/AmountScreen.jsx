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
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import Bell from "../components/Bell";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import ExchangeRates from "../components/ExhangeRates";
import InvsestmentOptionPopUp from "../components/ModalViews/InvsestmentOptionPopUp";

const AmountScreen = () => {
  const handleIconPress = () => {};

  const [modalVisible, setModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handlePress = () => {
    setShowModal(true);
    // [navigation.navigate("Amount")]
    setModalVisible(true);
  };

  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 pt-8">
      {/* ============= Correct Header section =========== */}
      <View className="pb-12">
        <View className="flex-row justify-center items-center mx-6 ">
          <TouchableOpacity
            className="bg-white rounded-full p-1 absolute left-0"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={22} color="#000000" />
          </TouchableOpacity>
          <Text className="font-bold text-base">Investment Amount</Text>
          <Bell />
        </View>
      </View>

      <View className="bg-white flex-1 pt-4 rounded-t-3xl">
        <View className="bg-[#F5F7FA]  mx-4 rounded-xl p-2 ">
          <Text className="text-[#817f7f] font-medium absolute top-6 left-4">
            USD
          </Text>
          <TextInput
            // value={usd}
            // onChangeText={handleUsdChange}
            placeholder="200"
            textAlign="right"
            keyboardType="numeric"
            className=" rounded-3xl p-4  "
            returnKeyType="done"
          />
        </View>
        <View className="flex-row justify-center -my-6">
          <View className="pt-4">
            <TouchableOpacity onPress={handleIconPress} className="">
              <View className="bg-[#343558] rounded-full p-2  mx-4">
                <ArrowsUpDownIcon color="#fff" size={18} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-[#F5F7FA] my-6 mx-4 rounded-xl p-2 ">
          <Text className="text-[#817f7f] font-medium absolute top-6 left-4">
            KES
          </Text>
          <TextInput
            // value={kes}
            // onChangeText={handleKesChange}
            placeholder="25, 512.60"
            textAlign="right"
            keyboardType="numeric"
            className=" rounded-3xl p-4  "
            returnKeyType="done"
          />
        </View>
        <ExchangeRates />
        <View className="pt-2 items-start">
          <Text className="text-[#817f7f] mx-6">Investment Product</Text>
        </View>

        <TouchableOpacity onPress={handlePress}>
          <View>
            {showModal && (
              <InvsestmentOptionPopUp
                visible={modalVisible}
                onClose={handleCloseModal}
              />
            )}
          </View>

          <View className="bg-[#F5F7FA] my-2 mx-4 rounded-3xl flex-row p-3 items-center justify-start ">
            <Text className="text-[#323232] font-medium items-start justify-start ">
              Madison Money Market Fund 10.3%
            </Text>
            <View className="absolute right-4">
              <ChevronDownIcon size={22} color="#000" />
            </View>

            {/* ============= Dropdownselect =========== */}
          </View>
        </TouchableOpacity>
        <View style={styles.border} className="pt-2" />

        <View className="pt-2 items-start">
          <Text className="text-[#817f7f] mx-6">Payment Method</Text>
        </View>

        <TouchableOpacity
          className="flex-1"
          onPress={() => navigation.navigate("WithdrawalAccount")}
        >
          <View className="bg-[#F5F7FA] my-2 mx-4 rounded-3xl p-3 items-start justify-center ">
            <Text className="text-[#323232] font-medium  ">
              John’s Mastercard ****2134
            </Text>

            <View className="absolute right-4">
              <ChevronDownIcon size={22} color="#000" />
            </View>
            {/* ============= Dropdownselect =========== */}
          </View>
        </TouchableOpacity>

        <View className="pb-6">
          <TouchableOpacity
            className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
            onPress={() => navigation.navigate("InvestmentSummary")}
          >
            <Text className="text-[#343558] text-lg text-center">Next</Text>
          </TouchableOpacity>
        </View>
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
  },
});

export default AmountScreen;
