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

const HEIGHT_MODAL = 140;
const WIDTH = Dimensions.get("window").width;

export const InvestmentPopUp = ({ visible, onClose }) => {
  const navigation = useNavigation();

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableOpacity disabled={true} style={styles.container}>
        <View style={[styles.modal, styles.centered]}>
          <Text className="mx-6 pt-4  font-medium">Select an option</Text>

          <View className="pt-1">
            <TouchableOpacity
              className=""
              onPress={() => {
                navigation.navigate("Amount");
              }}
            >
              <View className="flex-row my-2 items-center">
                <View className="bg-[#D9D9D9] rounded-full p-2 justify-start items-start mx-4">
                  <ArrowUpIcon
                    size={15}
                    color="#008631"
                    // style={{ marginBottom: 20 }}
                  />
                </View>

                <Text className="text-sm font-normal  text-[#2A2D2F]">
                  Invest
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Withdraw");
              }}
            >
              <View className="flex-row my-2 items-center">
                <View className="bg-[#D9D9D9] rounded-full p-2 justify-start items-start mx-4">
                  <ArrowDownIcon
                    size={15}
                    color="#EB476F"
                    // style={{ marginBottom: 20 }}
                  />
                </View>

                <Text className="text-sm font-normal  text-[#2A2D2F]">
                  Withdraw
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
          <Text style={styles.buttonText}>Cancel</Text>
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
    backgroundColor: "#FfFfFF",
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

export default InvestmentPopUp;
