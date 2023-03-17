import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Fonts } from "../components/Font";


const LandingScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => [navigation.navigate("CreateAccount")];

  return (
    <View className="bg-white flex-1">
      <View className="flex-1 ">
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../assets/image2.png")}
            style={{ height: "70%", width: "70%" }}
            resizeMode="contain"
          />
        </View>
      </View>

      <Text
        className="font-bold text-4xl pb-10 pl-4 pt-3 justify-start"

      >
        Investment made easy
      </Text>

      <View className="px-6 py-6">
        <TouchableOpacity
          className="bg-[#60D19A] p-4 mx-8 rounded-full items-center justify-center"
          onPress={handlePress}
        >
          <Text
            style={{ fontFamily: "SpaceGrotesk-Regular" }}
            className="text-[#252642] text-lg text-center"
          >
            Get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;
