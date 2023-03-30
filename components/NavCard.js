import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation, useRoute } from "@react-navigation/native";

const NavCard = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState("LinkedCards");

  const handleKenyanPress = () => {
    setSelected("LinkedCards");
  };

  const handleUsPress = () => {
    setSelected("LinkedAccounts");
  };

  return (
    <View className="items-center p-1 bg-[#F5F7FA] flex-row justify-center mx-12 rounded-3xl">
      <View className="justify-center flex-row items-center">
        <TouchableOpacity onPress={handleKenyanPress}>
          <View
            style={[
              styles.bankButton,
              {
                backgroundColor:
                  selected === "LinkedCards" ? "#FFFFFF" : "#F5F7FA",
              },
            ]}
            className="p-2 mx-4 rounded-3xl"
          >
            <Text className="text-[#333333]">Linked Cards</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUsPress}>
          <View
            style={[
              styles.bankButton,
              {
                backgroundColor:
                  selected === "LinkedAccounts" ? "#FFFFFF" : "#F5F7FA",
              },
            ]}
            className="p-2 mx-4 rounded-3xl"
          >
            <Text className="text-[#333333]">Linked Accounts</Text>
          </View>
        </TouchableOpacity>
        {/* ============= THought process =========== */}
        {selected === "LinkedAccounts" && (
          <View>
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
                    <Text className="text-[#2566AF] font-extrabold ">Visa</Text>
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
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bankButton: {
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default NavCard;
