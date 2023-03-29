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

const HEIGHT_MODAL = 200;
const WIDTH = Dimensions.get("window").width;

export const AccountAddModal = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const confettiRef = useRef(null);
  useEffect(() => {
    if (confettiRef.current) {
      confettiRef.current.startConfetti();
      setTimeout(() => {
        confettiRef.current.stopConfetti();
      }, 9000);
    }
  }, []);
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableOpacity disabled={true} style={styles.container}>
        <View style={[styles.modal, styles.centered]}>
          <CheckCircleIcon
            size={40}
            color="#008631"
            style={{ marginBottom: 20 }}
          />

          <View className='mx-8'>
            <Text className="text-3xl text-center">Account added</Text>
            <Text className="text-center pt-1 text-base">
              You can now select this account when withdrawing or investing
            </Text>
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

export default AccountAddModal;
