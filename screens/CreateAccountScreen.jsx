import { View, Text, SafeAreaView, TextInput, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import * as Font from "expo-font";
import { AppLoading } from "expo";


const CreateAccountScreen = () => {
  // useEffect(() => {
  //   async function loadFonts() {
  //     await Font.loadAsync({
  //       "SpaceGrotesk-Regular": require("../assets/fonts/SpaceGrotesk-Regular.ttf"),
  //       "SpaceGrotesk-Bold": require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
  //       // add more fonts here if needed
  //     });
  //     setDataLoaded(true);
  //   }
  //   loadFonts();
  // }, []);
  // if (!dataLoaded) {
  //   return (
  //     <View>
  //       <AppLoading />
  //     </View>
  //   );
  // }

  const [isSelected, setSelection] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [isValid, setValid] = useState(false);

  const navigation = useNavigation();

  const handlePress = () => {
    if (!isValid) {
      setAlertVisible(true);
      return;
    } else !isValid === true;
    setAlertVisible(false);
  };

  const renderAlert = () => {
    if (!isAlertVisible) {
      return null;
    }

    return (
      <View>
        <Text
          className="px-4 pt-3 text-red-500"
          style={{ fontFamily: "SpaceGrotesk-Regular" }}
        >
          *Please fill out all the fields
        </Text>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView className="bg-white flex-1">
        {/* <TouchableOpacity className='py-2 px-2'>
          <ChevronLeftIcon size={30} color="#333333" />
        </TouchableOpacity> */}

        <View className=" pl-2">
          <Text className="pl-2 text-4xl">Welcome</Text>
          <Text className="pl-2 pt-2 text-2xl">Create your new account</Text>
        </View>
        <View className="px-4 pt-6">
          <TextInput
            className="text-[#333333] bg-[#F5F7FA] p-6 rounded-2xl"
            placeholder="Full Name"
            onChangeText={(text) => setValid(text !== "")}
          />
        </View>
        <View className="px-4 pt-4">
          <TextInput
            className="text-[#333333] bg-[#F5F7FA] p-6 rounded-2xl"
            placeholder="Email Address"
            onChangeText={(text) => setValid(text !== "" && isValid)}
          />
        </View>
        <View className="px-4 pt-4">
          <TextInput
            className="text-[#333333] bg-[#F5F7FA] p-6 rounded-2xl"
            placeholder="Password"
            onChangeText={(text) => setValid(text !== "" && isValid)}
          />
        </View>
        <View className="px-4 pt-4">
          <TextInput
            className="text-[#333333] bg-[#F5F7FA] p-6 rounded-2xl"
            placeholder="Retype Password"
            onChangeText={(text) => setValid(text !== "" && isValid)}
          />
        </View>

        {renderAlert()}

        <View className="px-6 flex-row items-center pt-4">
          <Checkbox
            value={isSelected}
            onValueChange={setSelection}
            color={isSelected ? "#333333" : undefined}
          />
          <Text className="text-sm  pt-1 pl-2 pr-3 font-[400] text-[#343558]">
            By signing up, you agree to the Terms of Service and Privacy Policy
          </Text>
        </View>
        <View className="px-4 pt-12 flex-row items-center justify-center">
          <Text className="text-center text-sm p-1 text-[#333333]">
            Already have an account?{""}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="underline underline-offset-8">Log In</Text>
          </TouchableOpacity>
        </View>
        <View className={`pt-4 px-6 ${isSelected ? "" : "opacity-50"}`}>
          <TouchableOpacity
            className="bg-[#60D19A] p-3 rounded-full items-center justify-center"
            onPress={handlePress}
            disabled={!isSelected}
          >
            <Text className="text-[#252642] text-lg text-center">
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CreateAccountScreen;
