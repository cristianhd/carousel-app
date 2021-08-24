import React from "react";
import { useEffect } from "react";
import { View, Text,Image } from "react-native";
import { Container } from "./Styled";
import axios from 'axios';

const Home = ()=>{
   

    return(
        <Container>
            <Image
            style={{height:400}}
            source={{uri:'https://i.pinimg.com/564x/65/d7/a5/65d7a5dfbc9df254c845f3acf7122fb2.jpg'}}
            ></Image>
        </Container>
    )
}

export default Home;
