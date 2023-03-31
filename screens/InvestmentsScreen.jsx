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
import { ArrowDownIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import Bell from "../components/Bell";
import { ArrowUpIcon } from "react-native-heroicons/solid";

import { useNavigation } from "@react-navigation/native";
import { ChevronDoubleRightIcon } from "react-native-heroicons/outline";

const InvestmentsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 pt-8 ">
      {/* ============= Correct Header section =========== */}
      <View className="pt-1">
        <View className="flex-row justify-center items-center mx-6 ">
          <TouchableOpacity
            className="bg-white rounded-full p-1 absolute left-0"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={22} color="#000000" />
          </TouchableOpacity>
          <Text className=" text-xs">Kuza Money Market Fund </Text>
          <Bell />
        </View>
      </View>
      <ScrollView className="">
        <View className="">
          <View className="flex-row">
            <View className="flex-1 pt-4 mx-4 ">
              <Text className="text-[#4F4F4F] text-sm  ">Portfolio </Text>
              <Text className="text-[#4F4F4F] text-2xl font-bold ">
                KES 60,876.90
              </Text>
            </View>
            <View className="mx-4 justify-center pt-2">
              <Text className="text-[#333333] pl-12">+8.56%</Text>
              <View className="bg-[#60D19A] p-2 items-center rounded-xl">
                <Text className="text-[#4F4F4F]">+KES 5211.06</Text>
              </View>
            </View>
          </View>
        </View>
        {/* ============= Hero Section =========== */}
        <View className="flex-row ">
          <View className="pl-4 items-start justify-center  ">
            <TouchableOpacity
              className="bg-[#60D19A] h-16 w-40 justify-center  rounded-3xl
            "
              onPress={() => navigation.navigate("Amount")}
            >
              <Text className="text-[#252642] text-lg text-center">Invest</Text>
            </TouchableOpacity>
          </View>
          <View className="my-8 mx-6 items-start justify-center  ">
            <TouchableOpacity
              className="bg-[#E0E0E0] h-16 w-40 justify-center  rounded-3xl "
              onPress={() => navigation.navigate("Withdraw")}
            >
              <Text className="text-[#EB476F] text-lg text-center">
                Withdraw
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ============= Insight Section =========== */}
        <View className="flex-row ">
          <View className="pl-2 items-start justify-center  ">
            <View className="bg-white h-36 w-44 justify-center  rounded-3xl ">
              <Text className="text-[#60D19A] text-xs text-start top-4 absolute left-2">
                Investments
              </Text>
              <Text className="font-bold absolute top-8 left-2">
                KES 99,317.45
              </Text>
              <View></View>
              <Text className="font-medium text-xs  top-12 absolute left-2">
                Interest KES 2, 234
                <ArrowUpIcon size={12} color="#109434" />
              </Text>
            </View>
          </View>
          <View className="mx-2 items-start justify-center  ">
            <View className="bg-white h-36 w-44 justify-center  rounded-3xl ">
              <Text className="text-[#60D19A] text-xs text-start top-4 absolute left-2">
                Withdrawals
              </Text>
              <Text className="font-bold absolute top-8 left-2">
                KES 51,207.64
              </Text>
            </View>
          </View>
        </View>

        {/* ============= Transaction  section  =========== */}

        <View className="flex-row mx-4  pt-4">
          <Text className="text-[#4F4F4F] font-medium">
            Recent transactions
          </Text>
          <View className="absolute right-0">
            <TouchableOpacity>
              <View className="flex-row pt-4 items-center">
                <Text className="text-[#60D19A] font-normal ">View all</Text>
                <ChevronDoubleRightIcon size={15} color="#60D19A" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center mx-4 pt-4 ">
          <View className="bg-[#D9D9D9] rounded-full p-2">
            <ArrowUpIcon color="#109434" size={16} />
          </View>
          <Text className="items-center justify-center mx-2">Investment</Text>
          <View className="absolute right-0 justify-end pt-2">
            <Text className="text-[#333333] pl-12">+KES 12,720</Text>
            <View className="items-end ">
              <Text className="text-[#828282] font-normal text-xs ">
                Jun 2, 10:10
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row items-center mx-4 my-2 ">
          <View className="bg-[#D9D9D9] rounded-full p-2">
            <ArrowDownIcon color="#EB476F" size={16} />
          </View>
          <Text className="items-center justify-center mx-2">
            Withdrawal to account
          </Text>
          <View className="absolute right-0 justify-end pt-2">
            <Text className="text-[#333333] pl-12">-KES 23,903</Text>
            <View className="items-end ">
              <Text className="text-[#828282] font-normal text-xs ">
                Jun 2, 10:10
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row items-center mx-4  ">
          <View className="bg-[#D9D9D9] rounded-full p-2">
            <ArrowUpIcon color="#109434" size={16} />
          </View>
          <Text className="items-center justify-center mx-2">Investment</Text>
          <View className="absolute right-0 justify-end pt-2">
            <Text className="text-[#333333] pl-12">+KES 1,210</Text>
            <View className="items-end ">
              <Text className="text-[#828282] font-normal text-xs ">
                Jun 2, 10:10
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row items-center mx-4 my-2 ">
          <View className="bg-[#D9D9D9] rounded-full p-2">
            <ArrowDownIcon color="#EB476F" size={16} />
          </View>
          <Text className="items-center justify-center mx-2">
            Withdrawal to account
          </Text>
          <View className="absolute right-0 justify-end pt-2">
            <Text className="text-[#333333] pl-12">-KES 23,903</Text>
            <View className="items-end ">
              <Text className="text-[#828282] font-normal text-xs ">
                Jun 2, 10:10
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row items-center mx-4  ">
          <View className="bg-[#D9D9D9] rounded-full p-2">
            <ArrowUpIcon color="#109434" size={16} />
          </View>
          <Text className="items-center justify-center mx-2">Investment</Text>
          <View className="absolute right-0 justify-end pt-2">
            <Text className="text-[#333333] pl-12">+KES 12,720</Text>
            <View className="items-end ">
              <Text className="text-[#828282] font-normal text-xs ">
                Jun 2, 10:10
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row items-center mx-4 my-2 ">
          <View className="bg-[#D9D9D9] rounded-full p-2">
            <ArrowUpIcon color="#109434" size={16} />
          </View>
          <Text className="items-center justify-center mx-2">Investment</Text>
          <View className="absolute right-0 justify-end pt-2">
            <Text className="text-[#333333] pl-12">+KES 12,720</Text>
            <View className="items-end ">
              <Text className="text-[#828282] font-normal text-xs ">
                Jun 2, 10:10
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InvestmentsScreen;
