import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { BellIcon } from "react-native-heroicons/outline";
import React, { useState, useEffect } from "react";

export const Bell = () => {
  const [hasNotifications, setHasNotifications] = useState(true);
  const handleNotificationPress = () => {
    setHasNotifications(true);
  };

  return (
    <View className="absolute right-0">
      <TouchableOpacity onPress={handleNotificationPress}>
        <BellIcon size={30} color="#000000" />
        {hasNotifications && (
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
  );
};

export default Bell;
