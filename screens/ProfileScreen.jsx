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

const ProfileScreen = () => {
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
            <TouchableOpacity className="bg-white p-4 rounded-2xl">
              <Text>+ Add payment method</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white flex-1 rounded-t-3xl">
            <Text className="mx-4 my-4 font-medium text-base">Settings</Text>
          </View>
        </View>

        <Footer />
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
