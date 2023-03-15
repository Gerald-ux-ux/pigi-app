import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SimpleModal from "../components/SimpleModal";

interface PhoneOtpScreenProps {}

const CELL_COUNT = 6;
const RESEND_OTP_TIME_LIMIT = 30;

const PhoneOtpScreen: React.FC<PhoneOtpScreenProps> = () => {
  let resendOtpTimerInterval: any;

  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT
  );

  const startResendOtpTimer = (start = Boolean) => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    if (start) {
      resendOtpTimerInterval = setInterval(() => {
        if (resendButtonDisabledTime <= 0) {
          clearInterval(resendOtpTimerInterval);
        } else {
          setResendButtonDisabledTime(resendButtonDisabledTime - 1);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    startResendOtpTimer(false);
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, []);

  function onResendOtpButtonPress() {
    //clear input field
    setValue("");
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer(true); // start the timer when the Resend Code button is pressed

    // resend OTP Api call
    // todo
    console.log("todo: Resend OTP");
  }

  const navigation = useNavigation();

  //declarations for input field
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeModalVisible = (bool) => {
    setIsModalVisible(bool);
  };

  return (
    <SafeAreaView>
      <View className="py-4 pl-2">
        <Text className="pl-2 text-4xl">Is this you?</Text>
        <Text className="pl-2 pt-2 text-2xl">
          Enter the code we just sent to your number ending in 4417
        </Text>
      </View>
      <View className="py-6">
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={{ marginBottom: 20, paddingHorizontal: 12 }}
          keyboardType="number-pad"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              key={index}
              onLayout={getCellOnLayoutHandler(index)}
              style={{
                height: 40,
                width: 40,
                marginLeft: index !== 0 ? 10 : 0,
                borderBottomWidth: 3,
                borderColor: isFocused ? "#00FF00" : "#D9D9D9",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#333",
                  fontSize: 25,
                }}
              >
                {symbol || (isFocused ? <Cursor /> : "")}
              </Text>
            </View>
          )}
        />
      </View>
      <View>
        <TouchableOpacity onPress={onResendOtpButtonPress}>
          <View className="flex-row ">
            <Text className="text-[#343558] underline underline-offset-8  pr-16 absolute right-0 ">
              Resend Code
            </Text>
          </View>
        </TouchableOpacity>
        <Text className="pr-2 right-0 absolute -bottom-4 text-[#b1b1b1]">
          in {resendButtonDisabledTime}s
        </Text>
      </View>

      <View className="py-72 px-6">
        <TouchableOpacity
          className="bg-[#60D19A]  p-3 rounded-full items-center justify-center"
          onPress={() => changeModalVisible(true)}
        >
          <Text className="text-[#252642] text-lg text-center">Confirm</Text>
        </TouchableOpacity>
      </View>

      {/* ============= Modal Section =========== */}
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => changeModalVisible(false)}
      >
        <SimpleModal />
      </Modal>
    </SafeAreaView>
  );
};

export default PhoneOtpScreen;
