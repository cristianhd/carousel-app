import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./StyledButtons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { Actions } from "../../actions";


interface ButtonProps extends TouchableOpacityProps {
  currentPage: number;
}
const NextButton = ({currentPage,onPress}:ButtonProps) => {
  
  return(

  <ButtonContainer onPress={onPress} disabled={currentPage < 2 ? false : true}>
    <FontAwesome5 name='chevron-right' size={20} color='gray'/>
  </ButtonContainer>
  );
}

export default NextButton;