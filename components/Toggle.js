import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ToggleSwitch from 'toggle-switch-react-native';

export const Toggle = () => {
      const [isSelected, setSelected] = useState(); 

  return (
    <View className="flex-1 ">
      <View className="flex-row mx-4 items-center  ">
        <ToggleSwitch
          isOn={isSelected}
          onColor="#60D19A"
          offColor="#E8E8E8"
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="small"
          onToggle={(isOn) => setSelected(isOn)}
        />
        <Text className="text-normal font-semibold text-[#323232] pl-4 ">
          Mark as default
        </Text>
      </View>
    </View>
  );
}

export default Toggle