import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./StyledButtons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { Actions } from "../../actions";


const NextButton = () => {
  const Dispatch = useDispatch()
  
  const onPresss = ()=>{
    Dispatch({type:Actions.NEXT})
  }
  return(

  <ButtonContainer onPress={onPresss}>
    <FontAwesome5 name='chevron-right' size={12} color='gray'/>
  </ButtonContainer>
  );
}

export default NextButton;