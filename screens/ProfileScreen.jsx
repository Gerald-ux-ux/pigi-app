import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Footer } from "../components/Footer";
import Bell from "../components/Bell";
import {
  BellAlertIcon,
  LanguageIcon,
  ChevronRightIcon,
  UserIcon,
  ExclamationCircleIcon,
  FingerPrintIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import PaymentMethodPopUp from "../components/ModalViews/PaymentMethodPopUp";
import { useState } from "react";

const ProfileScreen = () => {
  const navigation = useNavigation();
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

  return (
    <>
      <SafeAreaView className="flex-1 pt-8">
        <View className="mx-4 ">
          <Bell />
        </View>

        <View className="flex-1 pt-10">
          <View className="justify-center items-center pb-2">
            <Image
              source={require("../assets/Rectangle1.png")}
              style={{ width: 100, height: 100 }}
            />
            <Text className="text-[#333333] font-bold text-base">
              John Magoka
            </Text>
          </View>

          <View className="justify-center my-6 items-center">
            <View>
              {showModal && (
                <PaymentMethodPopUp
                  visible={modalVisible}
                  onClose={handleCloseModal}
                  navigation={navigation}
                />
              )}
            </View>
            <TouchableOpacity
              onPress={handlePress}
              className="bg-white p-4 rounded-2xl"
            >
              <Text>+ Add payment method</Text>
            </TouchableOpacity>
          </View>
          {/* ============= Settings section  =========== */}

          <View className="bg-white flex-1 rounded-t-3xl">
            <Text className="mx-4 my-4 font-medium text-base">Settings</Text>
            <ScrollView>
              {/* ============= AccountInfo section  =========== */}
              <TouchableOpacity className="pb-2">
                <View className="flex-row ">
                  <View className="rounded-full  bg-[#E7E1FF] h-10 w-10 justify-center items-center mx-4">
                    <UserIcon color="#000000" />
                  </View>
                  <Text className="font-medium text-sm  ">
                    Account Information
                  </Text>
                  <View className="absolute left-16 mx-2 top-5">
                    <Text className="text-[#333333]">
                      View or edit your account information
                    </Text>
                  </View>
                  <View className="absolute right-4 top-2 items-center">
                    <ChevronRightIcon color="#797979" size={22} />
                  </View>
                </View>
              </TouchableOpacity>

              {/* ============= AppNotification section  =========== */}
              <TouchableOpacity className="py-2">
                <View className="flex-row ">
                  <View className="rounded-full  bg-[#ECF0D3] h-10 w-10 justify-center items-center mx-4">
                    <BellAlertIcon color="#000000" />
                  </View>
                  <Text className="font-medium text-sm  ">
                    App notifications
                  </Text>
                  <View className="absolute left-16 mx-2 top-5">
                    <Text className="text-[#333333]">
                      Customize the notification settings
                    </Text>
                  </View>
                  <View className="absolute right-4 top-2 items-center">
                    <ChevronRightIcon color="#797979" size={22} />
                  </View>
                </View>
              </TouchableOpacity>

              {/* ============= Biometrics section  =========== */}
              <TouchableOpacity className="py-2">
                <View className="flex-row ">
                  <View className="rounded-full  bg-[#DEF9E7] h-10 w-10 justify-center items-center mx-4">
                    <FingerPrintIcon color="#000000" />
                  </View>
                  <Text className="font-medium text-sm  ">Biometric login</Text>
                  <View className="absolute left-16 mx-2 top-5">
                    <Text className="text-[#333333]">
                      Use your face or fingerprint to log in
                    </Text>
                  </View>
                  <View className="absolute right-4 top-2 items-center">
                    <ChevronRightIcon color="#797979" size={22} />
                  </View>
                </View>
              </TouchableOpacity>

              {/* ============= App language section  =========== */}
              <TouchableOpacity className="py-2">
                <View className="flex-row ">
                  <View className="rounded-full  bg-[#DCECF4] h-10 w-10 justify-center items-center mx-4">
                    <LanguageIcon color="#000000" />
                  </View>
                  <Text className="font-medium text-sm  ">App language</Text>
                  <View className="absolute left-16 mx-2 top-5">
                    <Text className="text-[#333333]">
                      Change the app language
                    </Text>
                  </View>
                  <View className="absolute right-4 top-2 items-center">
                    <ChevronRightIcon color="#797979" size={22} />
                  </View>
                </View>
              </TouchableOpacity>

              {/* ============= About section  =========== */}
              <TouchableOpacity className="py-2">
                <View className="flex-row items-center">
                  <View className="rounded-full  bg-[#F9EFEF] h-10 w-10 justify-center items-center mx-4">
                    <ExclamationCircleIcon color="#000000" />
                  </View>
                  <Text className="font-medium text-sm ">
                    About Kenya Diaspora Investment App
                  </Text>

                  <View className="absolute right-4  items-center">
                    <ChevronRightIcon color="#797979" size={22} />
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <Footer />
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
