import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Bell from "../components/Bell";
import {
  ChevronLeftIcon,

} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import ToggleSwitch from "toggle-switch-react-native";

const AddCardScreen = () => {
  const [isSelected, setSelected] = useState();

  const handlePress = () => [navigation.navigate("Mpesa")];

  const navigation = useNavigation();
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
      {/* ============= Add card section =========== */}
      <View className="bg-white flex-1 pt-4 rounded-t-3xl ">
        <Text className="text-center text-[#333333] font-bold text-sm">
          Add new card
        </Text>

        <View className="py-6 mx-4 ">
          <View className="pb-4">
            <Text className="text-[#333333] font-medium text-sm pb-2">
              Cardholder Name
            </Text>
            <TextInput
              className="bg-[#F5F7FA]  p-4 rounded-3xl"
              placeholder="John Barasa"
            />
          </View>

          <Text className="text-[#333333] font-medium text-sm pb-2">
            Card Number
          </Text>
          <TextInput
            className="bg-[#F5F7FA]  p-4 rounded-3xl"
            placeholder="4478 0000 0000 0000"
            keyboardType="numeric"
            returnKeyType="done"
          />
        </View>

        <View className="flex-row mx-4 ">
          <Text className="font-medium">Expiry Date</Text>
          <Text className="absolute right-0 font-medium">Security Code</Text>
        </View>
        <View className="flex-row mx-4 py-2 ">
          <TextInput
            className="bg-[#F5F7FA]  p-4 rounded-3xl"
            textAlign="right"
            keyboardType="numeric"
            placeholder="12 "
            maxLength={2}
            returnKeyType="done"
          />
          <TextInput
            className="bg-[#F5F7FA] mx-16 p-4 rounded-3xl"
            textAlign="right"
            keyboardType="numeric"
            placeholder="2023 "
            maxLength={4}
            returnKeyType="done"
          />
          <TextInput
            className="bg-[#F5F7FA]  p-4 rounded-3xl"
            textAlign="right"
            keyboardType="numeric"
            maxLength={3}
            placeholder="123 "
            returnKeyType="done"
          />
        </View>
        <View className="flex-1 ">
          <View className="flex-row mx-4 items-center pt-4 ">
            <ToggleSwitch
              isOn={isSelected}
              onColor="#60D19A"
              offColor="#E8E8E8"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="small"
              onToggle={(isOn) => setSelected(isOn)}
            />
            <Text className="text-normal font-semibold text-[#323232] pl-4 ">
              Mark as default
            </Text>
          </View>
        </View>

        <View className="justify-center pb-4 mx-6">
          <Text className="text-xs text-center text-[#a7a7a7]">
            *$1 will be deducted in order to verify the card, don’t worry, we’ll
            refund it immediately
          </Text>
        </View>
        <View className="pb-6">
          <TouchableOpacity
            className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
            onPress={handlePress}
          >
            <Text className="text-[#F2FAFF] text-lg text-center">Add Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreen;
