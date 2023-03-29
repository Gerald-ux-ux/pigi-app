import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import Bell from "../components/Bell";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowDownIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ArrowsUpDownIcon,
} from "react-native-heroicons/solid";
import InvsestmentOptionPopUp from "../components/ModalViews/InvsestmentOptionPopUp";
import InvestmentSuccessPopUp from "../components/ModalViews/InvestmentSuccessPopUp";
const InvestmentSummaryScreen = () => {
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setModalVisible(false);
    setSuccessModalVisible(false);
  };

  const handlePress = () => {
    setShowModal(true);
    setModalVisible(true);
    // [navigation.navigate("Home")]
  };

  const handleSuccess = () => {
    setShowModal(true);
    setSuccessModalVisible(true);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 pt-8 ">
      {/* ============= Correct Header section =========== */}
      <View className="pb-12">
        <View className="flex-row justify-center items-center mx-6 ">
          <TouchableOpacity
            className="bg-white rounded-full p-1 absolute left-0"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={22} color="#000000" />
          </TouchableOpacity>
          <Text className="font-bold text-base">Summary</Text>
          <Bell />
        </View>
      </View>

      <View className="bg-white flex-1 pt-4 rounded-t-3xl ">
        <Text className="text-center text-[#333333] font-normal text-base pb-4">
          You are Investing
        </Text>
        <Text className="text-center text-[#333333] font-medium text-2xl pb-4">
          25, 159.10 KES
        </Text>

        <View className="flex-row justify-center items-center pb-6">
          <View className="bg-[#343558] rounded-full p-2 mx-4">
            <TouchableOpacity>
              <ArrowsUpDownIcon color="#fff" size={18} />
            </TouchableOpacity>
          </View>
          <Text className="text-sm text-[#817f7f] ">202.00 USD</Text>
        </View>
        <View style={styles.border} className="pt-2" />

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

          <View className="bg-[#F5F7FA] my-2 mx-4 rounded-3xl p-3 items-start justify-center ">
            <Text className="text-[#323232] font-medium items-start justify-start ">
              Madison Money Market Fund 10.3%
            </Text>

            <View className="absolute right-4">
              <ChevronDownIcon size={22} color="#000" />
            </View>
            {/* ============= Dropdownselect =========== */}
          </View>
        </TouchableOpacity>

        <View style={styles.border} className="pt-4" />

        <View className="flex-1">
          <View className="flex-row mx-6 items-center my-6">
            <Text className="font-bold text-sm">Interest *</Text>

            <View className="absolute right-0">
              <Text className="font-normal text-sm">10.3% per annum</Text>
              <Text className="text-right text-sm text-[#817f7f] ">
                KES 2,163.68
              </Text>
            </View>
          </View>

          <View className="flex-row mx-6 items-center my-3">
            <Text className="font-bold text-sm">Total after interest *</Text>
            <Text className="text-right text-sm absolute right-0 text-[#333333] ">
              KES 27, 322.78
            </Text>
          </View>
        </View>

        <View className="pb-6">
          <View>
            {showModal && (
              <InvestmentSuccessPopUp
                visible={successModalVisible}
                onClose={handleCloseModal}
              />
            )}
          </View>
          <TouchableOpacity
            className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
            onPress={handleSuccess}
          >
            <Text className="text-[#F2FAFF] text-lg text-center">Confirm</Text>
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

export default InvestmentSummaryScreen;
