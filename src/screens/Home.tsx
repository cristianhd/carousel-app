import React from "react";
import { useEffect } from "react";
import { View, Text,Image, Dimensions } from "react-native";
import { Container, ContainerText, Wrapper } from "./Styled";
import axios from 'axios';
import { getData } from "../actions";
import { useDispatch } from "react-redux";
import { defaultData } from "../../api/defaultData";
import NextButton from "../components/Buttons/NextButton";
import PreviousButton from "../components/Buttons/PreviousButton";

const Home = ()=>{
    interface Block {
        title: string,
        images: string[]
    }
    const {width} = Dimensions.get("screen")
    const heigth = width
    const Dispatch = useDispatch();
    const fetchData = ()=>Dispatch(getData())
    

    type data = Block[];

    const data = defaultData
    
    const randomInt = (min: number,max:number)=>{
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const pag = randomInt(0,3) // random number incluide 0 and excluide 3 [0,3)




    // useEffect(()=>{
    //     fetchData()
    // },[])

    return(
        <Container>
            <Wrapper>


            <PreviousButton/>
            
            <Image
                style={{height:400,width:'80%'}}
                source={{uri:data[0].images[pag]}}
                ></Image>
                <NextButton/>
            </Wrapper>
            <ContainerText>

            <Text>{data[0].title}</Text>
            </ContainerText>
            
            
        </Container>
    )
}

export default Home;
