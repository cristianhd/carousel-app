import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./StyledButtons";


const PreviousButton = ({ onPress}: TouchableOpacityProps) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText></ButtonText>
  </ButtonContainer>
);
export default PreviousButton;
