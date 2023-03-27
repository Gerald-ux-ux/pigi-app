import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { BackHandler } from "react-native";

function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.goBack();
        return true;
      }
    );

    return () => backHandler.remove();
  }, [navigation]);

  // ...
}

       
         /* ============= Top off App Js =========== */
       

import "react-native-gesture-handler";