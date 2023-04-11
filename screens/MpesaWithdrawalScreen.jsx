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
import NavCard from "../components/NavCard";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import Bell from "../components/Bell";
import { useNavigation } from "@react-navigation/native";
import NavWithdraw from "../components/NavWithdraw";

const MpesaWithdrawalScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const handleBankPress = () => [navigation.navigate("Bank")];
  const handleMpesaPress = () => [navigation.navigate("Mpesa")];

  return (
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

      <View className="bg-white flex-1 pt-4 rounded-t-3xl ">
        <Text className="text-center text-[#333333] font-bold text-sm pb-4">
          Select withdrawal account
        </Text>
        {/* ============= NavBank  section =========== */}
        <NavWithdraw
          selected={selected}
          setSelected={setSelected}
          className="flex-1"
        />

        {/* ============= Add Mpesa section =========== */}
        {selected === "Mpesa" ? (
          <View className="flex-1">
            <View className="items-center justify-center my-8">
              <Text>No accounts added</Text>
            </View>

            <View className="pb-3">
              <TouchableOpacity
                className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
                onPress={handleMpesaPress}
              >
                <Text className="text-[#F2FAFF] text-lg text-center">
                  + Add Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View className="flex-1">
            <ScrollView>
              <View className="pt-4 flex-1">
                <View
                  className="bg-[#F5F7FA] 
             mx-4 h-24 w-100 rounded-2xl my-3 "
                >
                  <View className="flex-row items-center mx-4 ">
                    <Text className="text-[#323232] font-normal text-base my-4">
                      KCB
                    </Text>
                    <Text className="text-[#323232] font-normal absolute right-0 text-base">
                      ***2434
                    </Text>
                  </View>
                  <Text className="text-[#323232] font-normal text-base mx-4">
                    John Barasa
                  </Text>
                </View>
                <View
                  className="bg-[#F5F7FA] 
             mx-4 h-24 w-100 rounded-2xl  "
                >
                  <View className="flex-row items-center mx-4 ">
                    <Text className="text-[#323232] font-normal text-base my-4">
                      Equity Bank
                    </Text>
                    <Text className="text-[#323232] font-normal absolute right-0 text-base">
                      **** 3890
                    </Text>
                  </View>
                  <Text className="text-[#323232] font-normal text-base mx-4">
                    John Barasa
                  </Text>
                </View>
                <View
                  className="bg-[#F5F7FA] 
             mx-4 h-24 w-100 rounded-2xl my-3  "
                >
                  <View className="flex-row items-center mx-4 ">
                    <Text className="text-[#323232] font-normal text-base my-4">
                      Goldman Sachs
                    </Text>
                    <Text className="text-[#323232] font-normal absolute right-0 text-base">
                      **** 3890
                    </Text>
                  </View>
                  <Text className="text-[#323232] font-normal text-base mx-4">
                    John Barasa
                  </Text>
                </View>
              </View>
            </ScrollView>
            <View className="pb-3">
              <TouchableOpacity
                className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
                onPress={handleBankPress}
              >
                <Text className="text-[#F2FAFF] text-lg text-center">
                  + Link Bank Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MpesaWithdrawalScreen;
