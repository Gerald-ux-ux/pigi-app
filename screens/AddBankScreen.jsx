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
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import ToggleSwitch from "toggle-switch-react-native";
import NavBank from "../components/NavBank";
import Bell from "../components/Bell";
import Toggle from "../components/Toggle";
import { KeyboardAvoidingView, Platform } from "react-native";
import AccountAddModal from "../components/ModalViews/AccountAddModal";

const AddBankScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");

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

  return (
    <>
      <SafeAreaView className="flex-1 pt-8 ">
        {/* ============= Header section =========== */}
        <View className="mx-4 flex-row  pb-6 ">
          <TouchableOpacity
            className="bg-white rounded-full p-1"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={22} color="#000000" />
          </TouchableOpacity>

          <Bell />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View className="bg-white flex-1 pt-4 rounded-t-3xl ">
            <Text className="text-center text-[#333333] font-bold text-sm pb-4">
              Add bank account
            </Text>
            {/* ============= NavBank  section =========== */}
            <NavBank
              selected={selected}
              setSelected={setSelected}
              className="flex-1"
            />

            {selected === "Kenyan" ? (
              <>
                <ScrollView>
                  <View className="py-3 mx-4 ">
                    <View className="pb-4">
                      <Text className="text-[#333333] font-medium text-sm pb-2">
                        Account holder name
                      </Text>
                      <TextInput
                        className="bg-[#F5F7FA]  p-4 rounded-3xl"
                        placeholder="Enter the account name"
                      />
                    </View>
                    <View className="">
                      <Text className="text-[#333333] font-medium text-sm pb-2">
                        Bank Name
                      </Text>
                      <TextInput
                        className="bg-[#F5F7FA]  p-4 rounded-3xl"
                        placeholder="Stanbic Bank"
                      />
                    </View>
                    <View className="pt-4">
                      <Text className="text-[#333333] font-medium text-sm pb-2">
                        Bank Account Number
                      </Text>
                      <TextInput
                        className="bg-[#F5F7FA]  p-4 rounded-3xl"
                        placeholder="0000000000"
                      />
                    </View>
                  </View>

                  <Toggle />
                </ScrollView>

                <View className="pb-3">
                  <View>
                    {showModal && (
                      <AccountAddModal
                        visible={modalVisible}
                        onClose={handleCloseModal}
                      />
                    )}
                  </View>
                  <TouchableOpacity
                    className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
                    onPress={handlePress}
                  >
                    <Text className="text-[#F2FAFF] text-lg text-center">
                      Link Bank
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <ScrollView>
                  <View className="py-3 mx-4 ">
                    <View className="pb-4">
                      <Text className="text-[#333333] font-medium text-sm pb-2">
                        Account holder name
                      </Text>
                      <TextInput
                        className="bg-[#F5F7FA]  p-4 rounded-3xl"
                        placeholder="Enter the account name"
                      />
                    </View>
                    <View className="">
                      <Text className="text-[#333333] font-medium text-sm pb-2">
                        Bank Name
                      </Text>
                      <TextInput
                        className="bg-[#F5F7FA]  p-4 rounded-3xl"
                        placeholder="Goldman Sachs"
                      />
                    </View>
                    <View className="pt-4">
                      <Text className="text-[#333333] font-medium text-sm pb-2">
                        Account Number
                      </Text>
                      <TextInput
                        className="bg-[#F5F7FA]  p-4 rounded-3xl"
                        placeholder="0000000000"
                      />
                    </View>

                    <View className="pt-4">
                      <Text className="text-[#333333] font-medium text-sm pb-2">
                        Routing Number
                      </Text>
                      <TextInput
                        className="bg-[#F5F7FA]  p-4 rounded-3xl"
                        placeholder="0000000000"
                      />
                    </View>
                  </View>

                  <Toggle />
                </ScrollView>

                <View className="pb-3">
                  <View>
                    {showModal && (
                      <AccountAddModal
                        visible={modalVisible}
                        onClose={handleCloseModal}
                      />
                    )}
                  </View>
                  <TouchableOpacity
                    className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
                    onPress={handlePress}
                  >
                    <Text className="text-[#F2FAFF] text-lg text-center">
                      Link Bank
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default AddBankScreen;
