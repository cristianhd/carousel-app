import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./StyledButtons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { Actions } from "../../actions";

interface ButtonProps extends TouchableOpacityProps {
  currentPage: number;
}

const PreviousButton = ({currentPage,onPress}:ButtonProps) => {
  
  return(
  <ButtonContainer onPress={onPress} 
  disabled={!currentPage}>
     <FontAwesome5 name='chevron-left' size={12} color='gray'/>
  </ButtonContainer>
);
}
export default PreviousButton;
