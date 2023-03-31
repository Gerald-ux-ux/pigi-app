import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation, useRoute } from "@react-navigation/native";

const NavCard = ({ selected, setSelected }) => {
  const navigation = useNavigation();

    useEffect(() => {
    setSelected("LinkedCards");
  }, []);

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
            onPress={() => setSelected("LinkedCards")}
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
            onPress={() => setSelected("LinkedAccounts")}
            className="p-2 mx-4 rounded-3xl"
          >
            <Text className="text-[#333333]">Linked Accounts</Text>
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

export default NavCard;
