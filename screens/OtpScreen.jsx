import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import EmailConfirmationPopUP from "../components/ModalViews/EmailConfirmationPopUP";

interface OtpScreenProps {}

const CELL_COUNT = 6;
const RESEND_OTP_TIME_LIMIT = 30;

const OtpScreen: React.FC<OtpScreenProps> = () => {
  let resendOtpTimerInterval: any;

  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT
  );

const [correctOTP, setCorrectOTP] = useState("123456");
const [otp, setOTP] = useState("");
const [showModal, setShowModal] = useState(false);
const [modalVisible, setModalVisible] = useState(false);

const handleOtpChange = (text: string) => {
  setOTP(text);
};

const handleOtpSubmit = () => {
  if (correctOTP.includes(otp)) {
    setShowModal(true);
    navigation.navigate("AddPhone");
    setModalVisible(true);
  } else {
    alert("Otp does not match");
    setShowModal(false);
  }
};

const handleCloseModal = () => {
  setModalVisible(false);
};


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

  //fix timeout that happens when the screen launches//
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

  useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  const navigation = useNavigation();

  //declarations for input field
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView className="flex-1 bg-white pt-8 ">
      {/* ============= Header =========== */}
      <View className="mx-4 flex justify-center pb-8 ">
        <Text className=" text-[#333333] pl-2 text-4xl">Is this you?</Text>
        <Text className=" text-[#333333] pl-2 pt-2 text-2xl">
          Enter the code we just sent to your e-mail
        </Text>
      </View>

      {/* ============= Cell Input =========== */}
      <View className="mx-4 flex-1">
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={(text: string) => {
            setValue(text);
            handleOtpChange(text);
          }}
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
                borderColor: isFocused ? "#000000" : "#D9D9D9",
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

      <View className="flex-1 absolute right-0 bottom-96 mx-20 pb-2">
        <TouchableOpacity onPress={onResendOtpButtonPress}>
          <View className="flex-row" style={{ flexWrap: "nowrap" }}>
            <Text className="text-[#343558] underline underline-offset-8">
              Resend Code
            </Text>
            <Text className="pr-2 -right-16 absolute -bottom-0 text-[#b1b1b1]">
              in {resendButtonDisabledTime}s
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="pb-4 mx-8">
        <View>
          {showModal && (
            <EmailConfirmationPopUP
              navigation={navigation}
              visible={modalVisible}
              onClose={handleCloseModal}
            />
          )}
        </View>

        <TouchableOpacity
          className="bg-[#60D19A]  p-3 rounded-full items-center justify-center"
          onPress={handleOtpSubmit}
        >
          <Text className="text-[#252642] text-lg text-center">Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
