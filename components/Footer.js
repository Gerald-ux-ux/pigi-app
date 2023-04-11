import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { HomeIcon } from "react-native-heroicons/outline";
import { ArrowsUpDownIcon } from "react-native-heroicons/outline";
import { UserIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import { InvestmentPopUp } from "./ModalViews/InvestmentPopUp";

export const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Set the selected state based on the current screen
  const [selected, setSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handlePress = () => {
    setShowModal(true);
    // [navigation.navigate("Amount")]
    setModalVisible(true);
  };

  useEffect(() => {
    // Update the selected state when the route changes
    setSelected(route.name === "Home" || route.name === "Profile");
  }, [route.name]);

  return (
    <View className="bg-white p-2 ">
      <View className="flex-row  justify-between mx-12">
        <View className="items-center ">
          <TouchableOpacity
            className="justify-center items-center"
            onPress={() => navigation.navigate("Home")}
          >
            <HomeIcon
              color={selected && route.name === "Home" ? "#60D19A" : "#A5A5A5"} // set green if selected and on the Home screen, gray if not
            />
            <Text
              className="text-bold text-xs "
              style={[
                {
                  color: selected && route.name === "Home" ? "#000" : "#A5A5A5",
                },
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-[#60D19A] rounded-full p-2 mx- items-center justify-center">
          <View>
            {showModal && (
              <InvestmentPopUp
                visible={modalVisible}
                onClose={handleCloseModal}
              />
            )}
          </View>
          <TouchableOpacity onPress={handlePress}>
            <ArrowsUpDownIcon color="#FFFF" />
          </TouchableOpacity>
        </View>
        <View className="">
          <TouchableOpacity
            className="justify-center items-center"
            onPress={() => navigation.navigate("Profile")}
          >
            <UserIcon
              color={
                selected && route.name === "Profile" ? "#60D19A" : "#A5A5A5"
              } // set green if selected and on the Profile screen, gray if not
            />
            <Text
              className="text-xs text-center  text-bold"
              style={[
                {
                  color:
                    selected && route.name === "Profile" ? "#000" : "#A5A5A5",
                },
              ]}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;
