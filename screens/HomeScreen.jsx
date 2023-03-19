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
import { useNavigation } from "@react-navigation/native";
import { BellIcon } from "react-native-heroicons/outline";
import { Time } from "../components/Time";
import { ArrowUpIcon } from "react-native-heroicons/solid";
import { PlusIcon } from "react-native-heroicons/solid";
import { Footer } from "../components/Footer";

const HomeScreen = () => {
  const [hasNotifications, setHasNotifications] = useState(false);

  const handleNotificationPress = () => {
    setHasNotifications(true);
  };

  const navigation = useNavigation();

  const handlePress = () => {
    [navigation.navigate("Investments")];
  };

  return (
    <>
      <SafeAreaView className=" flex-1 pt-8">
        {/* ============= User IMG =========== */}
        <View className="flex-row mx-4 items-center pb-2">
          <Image
            source={require("../assets/Rectangle1.png")}
            style={{ width: 40, height: 40 }}
          />

          <Text className="text-[#242424] items-center justify-center  text-base  mx-2">
            Good <Time />!
          </Text>

          <View className="absolute right-0">
            <TouchableOpacity onPress={handleNotificationPress}>
              <BellIcon size={30} color="#000000" />
              {hasNotifications > 0 && (
                <View
                  style={{
                    position: "absolute",
                    top: 3,
                    right: 5,
                    backgroundColor: "red",
                    borderRadius: 10,
                    width: 7,
                    height: 7,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 8 }}>
                    {hasNotifications}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          {/* ============= Hero Section =========== */}
          <View className="">
            <View className="flex-row">
              <View className="flex-1 pt-4 mx-4 ">
                <Text className="text-[#4F4F4F] text-sm  ">
                  Total portfolio
                </Text>
                <Text className="text-[#4F4F4F] text-2xl font-bold ">
                  KES 125,354.89
                </Text>
              </View>
              <View className="mx-4 justify-center pt-2">
                <Text className="text-[#333333] pl-12">+14.35%</Text>
                <View className="bg-[#60D19A] p-2 items-center rounded-xl">
                  <Text className="text-[#4F4F4F]">+KES 4553.21</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="pt-8 justify-center">
            <TouchableOpacity className="bg-[#60D19A] p-3 mx-28 rounded-full items-center justify-center">
              <Text className="text-[#252642] text-lg text-center">Invest</Text>
            </TouchableOpacity>
          </View>
          {/* ============= Insight Section =========== */}
          <View className="bg-white rounded-2xl p-20 mx-4 my-6">
            <View className="flex-row ">
              <View className=" absolute bottom-0 items-center justify-center -mx-12 my-8 ">
                <Text className="font-medium text-lg">Insights</Text>
              </View>
              <View className="absolute right-0 bottom-0 items-center justify-center -mx-12 my-8">
                <Text className="justify-center items-center text-lg font-medium text-[#000000]">
                  <ArrowUpIcon
                    size={20}
                    color="#109434"
                    className="justify-center items-center"
                  />
                  32%
                </Text>
              </View>
            </View>
          </View>
          {/* ============= Insight Section *GRAPHS* =========== */}

          <View>
            <View></View>
          </View>

          {/* ============= Investment Section =========== */}
          <View className="mx-4">
            <View className="flex-row">
              <Text className="text-[#4F4F4F] text-lg">My Investments</Text>
              <View className="absolute right-0">
                <TouchableOpacity>
                  <View className="flex-row  items-center">
                    <PlusIcon size={20} color="#60D19A" />
                    <Text className="text-[#60D19A] text-lg ">Add</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* ============= Investment.nav Section =========== */}
            <TouchableOpacity onPress={handlePress}>
              <View className="my-2">
                <View className="flex-row bg-white p-2 rounded-lg">
                  <View className="flex-1 justify-center">
                    <Text className="pb-2 text-[#323232]">
                      Kuza Money Market Fund
                    </Text>
                    <Text className="text-[#b8b8b9] my-2">9.8% Interest</Text>
                  </View>
                  <View className=" items-end">
                    <Text className="text-[#333333]  pb-2 ">
                      KES 60, 876.90
                    </Text>
                    <View className="bg-[#60D19A] p-2 rounded-lg">
                      <Text className="text-[#4F4F4F] ">+8.56%</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress}>
              <View className="my-2">
                <View className="flex-row bg-white p-2 rounded-lg">
                  <View className="flex-1 justify-center">
                    <Text className="pb-2 text-[#323232]">
                      Old Mutual Money Market Fund
                    </Text>
                    <Text className="text-[#b8b8b9] my-2">9.8% Interest</Text>
                  </View>
                  <View className="items-end ">
                    <Text className="text-[#333333] pl-12 pb-2 ">
                      KES 21, 321.54
                    </Text>
                    <View className="bg-[#60D19A] p-2 rounded-lg">
                      <Text className="text-[#4F4F4F] ">+1.01% </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="my-2">
                <View className="flex-row bg-white p-2 rounded-lg">
                  <View className="flex-1   ">
                    <Text className="  text-[#323232]">
                      Sanlam Pesa Money Market Fund
                    </Text>
                    <Text className="text-[#b8b8b9] my-2">9.8% Interest</Text>
                  </View>
                  <View className="items-end ">
                    <Text className="text-[#333333] pl-12 pb-2 ">
                      KES 43, 156.45
                    </Text>
                    <View className="bg-[#60D19A] p-2 rounded-lg">
                      <Text className="text-[#4F4F4F] ">+4.43%</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* ============= Footer Nav =========== */}
        <Footer />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
