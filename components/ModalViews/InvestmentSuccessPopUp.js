import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Modal,
} from "react-native";
import React from "react";
import { CheckCircleIcon } from "react-native-heroicons/solid";
import Confetti from "react-native-confetti";
import { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const HEIGHT_MODAL = 240;
const WIDTH = Dimensions.get("window").width;

export const InvestmentSuccessPopUp = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const confettiRef = useRef(null);
useEffect(() => {
  if (confettiRef.current) {
    confettiRef.current.startConfetti();
    setTimeout(() => {
      if (confettiRef.current) {
        confettiRef.current.stopConfetti();
      }
    }, 9000);
  }
}, [confettiRef.current]);


  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableOpacity disabled={true} style={styles.container}>
        <View style={[styles.modal, styles.centered]}>
          <CheckCircleIcon
            size={40}
            color="#48AF2C"
            style={{ marginBottom: 10 }}
          />

          <View className="mx-8">
            <Text className="text-3xl font-medium text-center pb-2">
              25, 159.10 KES
            </Text>
            <Text className="text-base text-center">Investment successful</Text>
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
        <Confetti ref={confettiRef} />
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Add a semi-transparent background
  },
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 80,
    backgroundColor: "white",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // Set the z-index to appear above the blur overlay
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
    height: 50,
    width: WIDTH - 220,
    marginTop: 20,
    backgroundColor: "#F2FAFF",
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

export default InvestmentSuccessPopUp;
