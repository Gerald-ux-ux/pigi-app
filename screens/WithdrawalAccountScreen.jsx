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
import { LinearGradient } from "expo-linear-gradient";

const WithdrawalAccountScreen = ({ handleKenyanPress, handleUsPress }) => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState("");

  // const handleKenyanPress = () => {
  //   setSelected("LinkedCards");
  // };

  // const handleUsPress = () => {
  //   setSelected("LinkedAccounts");
  // };

  const handlePress = () => [navigation.navigate("Card")];
  const handleMpesaPress = () => [navigation.navigate("Mpesa")];

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
      <View className="bg-white flex-1 pt-4 rounded-t-3xl ">
        <Text className="text-center text-[#333333] font-bold text-sm pb-4">
          Select payment method
        </Text>
        {/* ============= NavBank  section =========== */}
        <NavCard
          selected={selected}
          setSelected={setSelected}
          className="flex-1"
        />
        {/* ============= Add card section =========== */}
        {selected === "LinkedCards" ? (
          <View className='flex-1'>
            <View className="flex-1">
              <LinearGradient
                colors={["#85A0DA", "#6DD0D7", "#47B2FF"]}
                className="h-40 w-100 mx-4 my-2 rounded-3xl"
              >
                <View className="">
                  <View className="flex-row items-center">
                    <Text className="font-bold text-[#F2F2F2] absolute left-6 top-6 text-base">
                      Card 1
                    </Text>
                    <View className="bg-[#EB476F] h-6 w-6 absolute right-8 top-6 rounded-full"></View>
                    <View className="bg-[#F5C042] h-6 w-6 absolute right-4 top-6 rounded-full"></View>
                  </View>

                  <Text className="text-[#F2F2F2] text-base absolute left-6 top-16 ">
                    John Fisayo
                  </Text>
                  <View className="flex-row mx-6 absolute top-28 items-center">
                    <Text className="text-[#F2F2F2] text-base font-bold ">
                      2134
                    </Text>
                    <Text className="text-[#F2F2F2] absolute text-base font-bold left-28">
                      12/24
                    </Text>
                  </View>
                </View>
              </LinearGradient>
              {/* ============= Add card section =========== */}
              <LinearGradient
                colors={["#C2E4F8", "#C2E4F8", "#FAEAC3"]}
                className="h-40 w-100 mx-4  rounded-3xl"
              >
                <View className="">
                  <View className="flex-row items-center">
                    <Text className="font-bold text-[#333333] absolute left-6 top-6 text-base">
                      Card 1
                    </Text>
                    <View className=" absolute right-8 top-6 rounded-full">
                      <Text className="text-[#2566AF] font-extrabold ">
                        Visa
                      </Text>
                    </View>
                  </View>

                  <Text className="text-[#333333] text-base absolute left-6 top-16 ">
                    John Fisayo
                  </Text>
                  <View className="flex-row mx-6 absolute top-28 items-center">
                    <Text className="text-[#333333] text-base font-bold ">
                      2134
                    </Text>
                    <Text className="text-[#333333] absolute text-base font-bold left-28">
                      12/24
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
            <View className="pb-6">
              <TouchableOpacity
                className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
                onPress={handlePress}
              >
                <Text className="text-[#F2FAFF] text-lg text-center">
                  + Add Card
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View className="flex-1">
            <View className="pt-4 flex-1">
              <View
                className="bg-[#F5F7FA] 
             mx-4 h-24 w-100 rounded-2xl my-6 "
              >
                <View className="flex-row items-center mx-4 ">
                  <Text className="text-[#323232] font-normal text-base my-4">
                    M-Pesa
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
                    Tkash
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
            <View className="pb-6">
              <TouchableOpacity
                className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
                onPress={handleMpesaPress}
              >
                <Text className="text-[#F2FAFF] text-lg text-center">
                  + Link Mobile Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WithdrawalAccountScreen;
