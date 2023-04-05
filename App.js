import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/LandingScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import LoginScreen from "./screens/LoginScreen";
import OtpScreen from "./screens/OtpScreen";
import AddPhoneScreen from "./screens/AddPhoneScreen";
import PhoneOtpScreen from "./screens/PhoneOtpScreen";
import HomeScreen from "./screens/HomeScreen";
import InvestmentsScreen from "./screens/InvestmentsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AmountScreen from "./screens/AmountScreen";
import WithdrawScreen from "./screens/WithdrawScreen";
import AddCardScreen from "./screens/AddCardScreen";
import AddMpesaScreen from "./screens/AddMpesaScreen";
import AddBankScreen from "./screens/AddBankScreen";
import WithdrawalAccountScreen from "./screens/WithdrawalAccountScreen";
import WithdrawalSummaryScreen from "./screens/WithdrawalSummaryScreen";
import InvestmentSummaryScreen from "./screens/InvestmentSummaryScreen";
import PaymentMethodPopUp from "./components/ModalViews/PaymentMethodPopUp";
import MpesaWithdrawalScreen from "./screens/MpesaWithdrawalScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="AddPhone"
          component={AddPhoneScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="PhoneOtp"
          component={PhoneOtpScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Investments"
          component={InvestmentsScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Amount"
          component={AmountScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Withdraw"
          component={WithdrawScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Card"
          component={AddCardScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Mpesa"
          component={AddMpesaScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Bank"
          component={AddBankScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="WithdrawalAccount"
          component={WithdrawalAccountScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="WithdrawalSummary"
          component={WithdrawalSummaryScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="InvestmentSummary"
          component={InvestmentSummaryScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="MpesaWithdrawal"
          component={MpesaWithdrawalScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
