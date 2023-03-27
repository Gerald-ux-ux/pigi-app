import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Toggle from './Toggle';
import NavBank from './NavBank';

const Bank = () => {

    const [selectedBank, setSelectedBank] = useState("kenyan");


    const handleBankChange = (bank) => {
      setSelectedBank(bank);
    };

    
    return (
      <>
        {/* ============= NavBank  section =========== */}
        <NavBank onBankChange={handleBankChange} />

        <View className="py-6 mx-4 ">
          <View className="pb-4">
            <Text className="text-[#333333] font-medium text-sm pb-2">
              Account holder name
            </Text>
            <TextInput
              className="bg-[#F5F7FA]  p-4 rounded-3xl"
              placeholder="Enter the account name"
            />
          </View>
          <View className="">
            <Text className="text-[#333333] font-medium text-sm pb-2">
              Bank Name
            </Text>
            <TextInput
              className="bg-[#F5F7FA]  p-4 rounded-3xl"
              placeholder="Stanbic Bank"
            />
          </View>
          <View className="pt-4">
            <Text className="text-[#333333] font-medium text-sm pb-2">
              Account Number
            </Text>
            <TextInput
              className="bg-[#F5F7FA]  p-4 rounded-3xl"
              placeholder="0000000000"
            />
          </View>
          <View className="pt-4">
            <Text className="text-[#333333] font-medium text-sm pb-2">
              Routing Number
            </Text>
            <TextInput
              className="bg-[#F5F7FA]  p-4 rounded-3xl"
              placeholder="0000000000"
            />
          </View>
        </View>

        {/* ============= Toggle section =========== */}

        <Toggle />

        <View className="pb-6">
          <TouchableOpacity
            className="bg-[#60D19A] p-3 mx-8 rounded-full items-center justify-center"
            onPress={handlePress}
          >
            <Text className="text-[#F2FAFF] text-lg text-center">Add Card</Text>
          </TouchableOpacity>
        </View>
      </>
    );
}

export default Bank