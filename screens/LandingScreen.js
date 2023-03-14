import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {

    const navigation = useNavigation();

    const handlePress = () => [
        navigation.navigate('CreateAccount')
    ]

  return (
    <View className="bg-white flex-1 ">
      <View className="items-center pt-12">
        <Image source={require("../assets/image1.jpg")} />
      </View>

      <Text className="font-bold text-4xl pb-10 pl-4 pt-6">
        Investment made easy
      </Text>

      <View className="px-6 py-2">
        <TouchableOpacity
          className="bg-[#60D19A] p-4 rounded-full items-center justify-center"
          onPress={handlePress}
        >
          <Text className="text-[#252642] text-lg">Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;
