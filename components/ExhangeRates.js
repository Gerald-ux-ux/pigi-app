import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ExchangeRates = () => {
  const [rates, setRates] = useState({});

  const baseUrl =
    "https://api.fastforex.io/fetch-all?api_key=0c46ff1b1f-a4e739a0d4-rs11c1";

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setRates(response.data.rates);
    });
   
  }, []);


const usdToKes = (usd) => {
  if (!rates || Object.keys(rates).length === 0) {
    return "Loading..."; // or any default value to display while the API call is being made
  }
  const kesRate = rates["KES"]; // get the exchange rate for KES
  const usdRate = rates["USD"]; // get the exchange rate for USD
  const kes = (usd / usdRate) * kesRate; // convert USD to KES
  return kes.toFixed(2); // round to 2 decimal places
};


  return (
    <View>
      <View className="">
        <View className="flex-row ">
          <Text className="font-normal mx-6 text-[#817f7f]">Today's rate</Text>
          <Text className="absolute right-0 mx-6 text-[#817f7f] font-medium">
            1 USD = {usdToKes(1)} KES
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
