import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const LandingScreen = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "SpaceGrotesk-Regular": require("../assets/fonts/SpaceGrotesk-Regular.ttf"),
        "SpaceGrotesk-Bold": require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
        // add more fonts here if needed
      });
      setDataLoaded(true);
    }
    loadFonts();
  }, []);

  const navigation = useNavigation();

  const handlePress = () => [navigation.navigate("CreateAccount")];

  // if (!dataLoaded) {
  //   return (
  //     <View>
  //       <AppLoading />
  //     </View>
  //   );
  // }

  return (
    <View className="bg-white flex-1">
      <View className='flex-1 '>
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
        className="font-bold text-4xl pb-10 pl-4 pt-3"
        style={{ fontFamily: "SpaceGrotesk-Regular" }}
      >
        Investment made easy
      </Text>

      <View className="px-6 py-4">
        <TouchableOpacity
          className="bg-[#60D19A] p-4 rounded-full items-center justify-center"
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
