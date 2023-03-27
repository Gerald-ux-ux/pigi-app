import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const NavBank = () => {
  const navigation = useNavigation();
 
  const [selected, setSelected] = useState("kenyan");

const handleKenyanPress = () => {
  setSelected("kenyan");

};

const handleUsPress = () => {
  setSelected("us");

};

  return (
    <View className="  items-center p-1 bg-[#F5F7FA] flex-row justify-center mx-12 rounded-3xl">
      <View className="justify-center flex-row items-center">
        <TouchableOpacity onPress={handleKenyanPress}>
          <View
            style={[
              styles.bankButton,
              {
                backgroundColor: selected === "kenyan" ? "#FFFFFF" : "#F5F7FA",
              },
            ]}
            className="p-2  mx-4 rounded-3xl"
          >
            <Text className="text-[#333333]">Kenyan Bank</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUsPress}>
          <View
            style={[
              styles.bankButton,
              { backgroundColor: selected === "us" ? "#FFFFFF" : "#F5F7FA" },
            ]}
            className="p-2 mx-4 rounded-3xl"
          >
            <Text className="text-[#333333]">US Bank</Text>
          </View>
        </TouchableOpacity>
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

export default NavBank;
