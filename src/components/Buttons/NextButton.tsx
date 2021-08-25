import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./StyledButtons";
import { FontAwesome5 } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  currentPage: number;
}
const NextButton = ({ currentPage, onPress }: ButtonProps) => {
  return (
    <ButtonContainer
      onPress={onPress}
      disabled={currentPage < 2 ? false : true}
    >
      <FontAwesome5
        name="chevron-right"
        size={20}
        color={currentPage < 2 ? "gray" : "white"}
      />
    </ButtonContainer>
  );
};

export default NextButton;
