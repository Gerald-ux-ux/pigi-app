import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { BellIcon } from "react-native-heroicons/outline";



const HomeScreen = () => {
  const navigation = useNavigation();

  const [notificationCount, setNotificationCount] = useState(3);

  const handleNotificationPress = () => {
    setNotificationCount(notificationCount + 1);
  };

  return (
    <SafeAreaView className="bg-white flex-1 pt-8">
      {/* ============= User IMG =========== */}
      <View className="flex-row mx-4 items-center">
        <Image
          source={require("../assets/Rectangle.jpg")}
          style={{ width: 50, height: 50 }}
        />
        <Text className="text-[#242424] text-xl mx-2">
          Good <Time />
        </Text>

        <View className="absolute right-0">
          <TouchableOpacity onPress={handleNotificationPress}>
            <BellIcon size={30} />
            {notificationCount > 0 && (
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "red",
                  borderRadius: 10,
                  width: 10,
                  height: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 8 }}>
                  {notificationCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
