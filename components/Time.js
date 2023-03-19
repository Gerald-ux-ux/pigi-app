import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export const Time  = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Afternoon");
    } else {
      setGreeting("Evening");
    }
  }, []);

    return (
      <View className='items-center justify-center'>
        <Text className="text-[#242424] text-base py-1  ">{greeting}</Text>
      </View>
    );
};

export default Time;
