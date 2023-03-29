import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Modal,
} from "react-native";
import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "react-native-heroicons/solid";

import { useNavigation } from "@react-navigation/native";


const HEIGHT_MODAL = 180;
const WIDTH = Dimensions.get("window").width;

export const InvsestmentOptionPopUp = ({ visible, onClose }) => {
      const navigation = useNavigation();
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableOpacity disabled={true} style={styles.container}>
        <View style={[styles.modal, styles.centered]}>
          <View className="pt-4">
            <TouchableOpacity
              className=""
              onPress={() => {
                // navigation.navigate("Home");
              }}
            >
              <View className="flex-row my-6  mx-6 items-center">
                <Text className="text-sm font-medium text-[#323232]">
                  Kuza Money Market Fund
                </Text>
                <Text className="text-sm font-medium absolute right-0 text-[#323232]">
                  9.8%
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate("Home");
              }}
            >
              <View className="flex-row pb-6  mx-6 items-center">
                <Text className="text-sm font-medium text-[#323232]">
                  Old Mutual Money Market Fund
                </Text>
                <Text className="text-sm font-medium absolute right-0 pb-6  text-[#323232]">
                  9.9%
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate("Home");
              }}
            >
              <View className="flex-row  mx-6 items-center">
                <Text className="text-sm font-medium text-[#323232]">
                  Sanlam Pesa Money Market Fund 
                </Text>
                <Text className="text-sm font-medium absolute right-0 text-[#323232]">
                  9.6%
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            onClose();
          }}
          style={[styles.buttonContainer, styles.centered]}
        >
          <Text style={styles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",

    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modal: {
    bottom: 30,
    height: HEIGHT_MODAL,
    width: WIDTH - 30,
    backgroundColor: "white",
    borderRadius: 20,
  },
  modalText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 70,
  },
  centered: {
    alignSelf: "center",
  },
  buttonContainer: {
    bottom: 30,
    height: 50,
    width: WIDTH - 30,
    marginTop: 20,
    backgroundColor: "#F5F7FA",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 16,
    color: "#343558",
  },
});

export default InvsestmentOptionPopUp;
