import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./StyledButtons";


const NextButton = ({ onPress}: TouchableOpacityProps) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText></ButtonText>
  </ButtonContainer>
);

export default NextButton;


