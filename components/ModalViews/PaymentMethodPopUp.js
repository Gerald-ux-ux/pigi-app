import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Modal,
} from "react-native";
import React from "react";
import {
  CreditCardIcon,
  PhoneIcon,
  BanknotesIcon,
} from "react-native-heroicons/solid";

import { useNavigation } from "@react-navigation/native";

const HEIGHT_MODAL = 220;
const WIDTH = Dimensions.get("window").width;

export const PaymentMethodPopUp = ({ visible, onClose }) => {
  const navigation = useNavigation();

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableOpacity disabled={true} style={styles.container}>
        <View style={[styles.modal, styles.centered]} className="pt-6">
          <Text className="mx-6 font-medium pb-4">Select an option</Text>
          <View className="pt-4">
            <TouchableOpacity
              className="pb-4"
              onPress={() => {
                navigation.navigate("Card");
              }}
            >
              <View className="flex-row  items-center">
                <View className="bg-[#F9EFEF] rounded-full p-2 justify-start items-start mx-4">
                  <CreditCardIcon
                    size={15}
                    color="#000"
                    // style={{ marginBottom: 20 }}
                  />
                </View>
                <Text className="text-sm font-normal  text-[#2A2D2F]">
                  Add card
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="pb-4"
              onPress={() => {
                navigation.navigate("Mpesa");
              }}
            >
              <View className="flex-row  items-center">
                <View className="bg-[#DEF9E7] rounded-full p-2 justify-start items-start mx-4">
                  <PhoneIcon
                    size={15}
                    color="#000"
                    // style={{ marginBottom: 20 }}
                  />
                </View>

                <Text className="text-sm font-normal  text-[#2A2D2F]">
                  Link M-pesa Account
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="pb-4"
              onPress={() => {
                navigation.navigate("Bank");
              }}
            >
              <View className="flex-row  items-center">
                <View className="bg-[#E7E1FF] rounded-full p-2 justify-start items-start mx-4">
                  <BanknotesIcon
                    size={15}
                    color="#000"
                    // style={{ marginBottom: 20 }}
                  />
                </View>

                <Text className="text-sm font-normal  text-[#2A2D2F]">
                  Link Bank Account
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

export default PaymentMethodPopUp;
