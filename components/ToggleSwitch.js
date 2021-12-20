import React, { useState } from "react";
import { View, Switch } from "react-native";


export default function ToggleSwitch() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View >
        <Switch
          trackColor={{ false: "#3e3e3e", true: "#50C878" }}
          thumbColor="white"
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  }