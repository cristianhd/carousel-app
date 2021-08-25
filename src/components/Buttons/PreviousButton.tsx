import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./StyledButtons";
import { FontAwesome5 } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  currentPage: number;
}

const PreviousButton = ({ currentPage, onPress }: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress} disabled={!currentPage}>
      <FontAwesome5
        name="chevron-left"
        size={20}
        color={currentPage ? "gray" : "white"}
      />
    </ButtonContainer>
  );
};
export default PreviousButton;
