import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ExchangeRates = () => {
  const [rates, setRates] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KES");

  useEffect(() => {
    const baseUrl =
      "https://v6.exchangerate-api.com/v6/0a4337df7f1fed713f715fb4/latest/USD";

    axios.get(baseUrl).then((response) => {
      setRates(response.data.conversion_rates);
    });
  }, []);

  const usdToKes = (usd) => {
    if (!rates || Object.keys(rates).length === 0) {
      return "Processing..."; 
    }
    const kesRate = rates["KES"]; 
    const fromRate = rates[fromCurrency]; 
    const kes = (usd / fromRate) * kesRate; 
    return kes.toFixed(2); 
  };

  return (
    <View>
      <View className="">
        <View className="flex-row ">
          <Text className="font-normal mx-6 text-[#817f7f]">Today's rate</Text>
          <Text className="absolute right-0 mx-6 text-[#817f7f] font-medium">
            1 {fromCurrency} = {usdToKes(1)} {toCurrency}
          </Text>
        </View>
        <View style={styles.border} className="pt-4" />
      </View>
    </View>
  );
};

const styles = {
  border: {
    borderBottomWidth: 1,
    borderBottomColor: "#C9C9C9",
  },
};

export default ExchangeRates;
