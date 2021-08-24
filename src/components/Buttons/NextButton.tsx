import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./StyledButtons";
import { FontAwesome5 } from "@expo/vector-icons";


const NextButton = ({ onPress}: TouchableOpacityProps) => (
  <ButtonContainer onPress={onPress}>
    <FontAwesome5 name='chevron-right' size={12} color='gray'/>
  </ButtonContainer>
);

export default NextButton;


