import React from "react";
import { View, Text,Image } from "react-native";
import { Container } from "./Styled";

const Home = ()=>{
    return(
        <Container>
            <Image
            style={{height:400}}
            source={{uri:'https://i.pinimg.com/564x/e7/8e/98/e78e98ac92f7b438d41f4c31fd891be8.jpg'}}
            ></Image>
        </Container>
    )
}

export default Home;
