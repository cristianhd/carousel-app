import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Container, WrapperIcon } from "./Styled";
import { data } from "../../../screens/Home";
import { Text } from "react-native";

interface ProgressProps {
    Blocks: data
    pag: number
}
const ProgressCarrousel = ({Blocks,pag}: ProgressProps)=>{
    
    
    return(
        <Container>

            {
                Blocks.map((item,index)=>{

                    return (
                        <WrapperIcon key={index}>

                            <FontAwesome name='circle' color={pag===index ? 'black': 'gray'}></FontAwesome>
                        </WrapperIcon>
                    )
                    
                })
            }
        </Container>

    )
    
};

export default ProgressCarrousel;
