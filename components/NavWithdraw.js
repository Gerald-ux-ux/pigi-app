import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
const NavWithdraw = ({ selected, setSelected }) => {
  const navigation = useNavigation();

  useEffect(() => {
    setSelected("Mpesa");
  }, []);

  const handleKenyanPress = () => {
    setSelected("Mpesa");
  };

  const handleUsPress = () => {
    setSelected("BankAccount");
  };
  return (
    <View className="items-center p-1 bg-[#F5F7FA] flex-row justify-center mx-12 rounded-3xl">
      <View className="justify-center flex-row items-center">
        <TouchableOpacity onPress={handleKenyanPress}>
          <View
            style={[
              styles.bankButton,
              {
                backgroundColor: selected === "Mpesa" ? "#FFFFFF" : "#F5F7FA",
              },
            ]}
            onPress={() => setSelected("Mpesa")}
            className="p-2 mx-4 rounded-xl"
          >
            <Text className="text-[#333333]">Mpesa</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUsPress}>
          <View
            style={[
              styles.bankButton,
              {
                backgroundColor:
                  selected === "BankAccount" ? "#FFFFFF" : "#F5F7FA",
              },
            ]}
            onPress={() => setSelected("BankAccount")}
            className="p-2 mx-4 rounded-xl"
          >
            <Text className="text-[#333333]">Bank Accounts</Text>
          </View>
        </TouchableOpacity>
        {/* ============= THought process =========== */}
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

export default NavWithdraw;
