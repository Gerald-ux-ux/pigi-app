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
import WithdrawSuccessModal from "../components/ModalViews/WithdrawSuccessModal";

const WithdrawalSummaryScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
      setModalVisible(false);
    };

    const handlePress = () => {
      setShowModal(true);
      setModalVisible(true);
      // [navigation.navigate("Home")]
    };
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 pt-8 ">
      {/* ============= Correct Header section =========== */}
      <View className="pb-6">
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
          You are withdrawing
        </Text>
        <Text className="text-center text-[#333333] font-medium text-2xl pb-4">
          25, 000 KES
        </Text>

        <View className="flex-row justify-center items-center pb-6">
          <View className="bg-[#343558] rounded-full p-2 mx-4">
            <TouchableOpacity>
              <ArrowsUpDownIcon color="#fff" size={18} />
            </TouchableOpacity>
          </View>
          <Text className="text-sm ">200.72 USD</Text>
        </View>

        <View className="flex-row mx-4 ">
          <Text className=" text-[#817f7f] ">Today’s rate</Text>
          <Text className="absolute right-0  text-[#817f7f] ">
            1 USD = 124.55 KES
          </Text>
        </View>

        <View style={styles.border} className="pt-4 " />

        <View className="flex-row mx-4 pt-4 flex-1 ">
          <Text className=" text-[#333333] ">Account</Text>
          <Text className="absolute right-0 pt-4  text-[#333333] ">
            Checking **** 32134
          </Text>
        </View>

        <View className="justify-center pb-4 mx-6">
          <Text className="text-xs text-center text-[#a7a7a7]">
            Withdrawals to linked bank accounts are typically processed within 6
            hours*
          </Text>
        </View>
        <View className="pb-3">
          <View>
            {showModal && (
              <WithdrawSuccessModal
                visible={modalVisible}
                onClose={handleCloseModal}
              />
            )}
          </View>
          <TouchableOpacity
            className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
            onPress={handlePress}
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

export default WithdrawalSummaryScreen;
