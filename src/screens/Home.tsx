import React from "react";
import { useEffect } from "react";
import { View, Text,Image, Dimensions, GestureResponderEvent } from "react-native";
import { Container, ContainerText, Wrapper } from "./Styled";
import axios from 'axios';
import { Actions, getData } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { defaultData } from "../../api/defaultData";
import NextButton from "../components/Buttons/NextButton";
import PreviousButton from "../components/Buttons/PreviousButton";
import { stateApp } from "../reducer/dataReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApplicationState } from "../reducer";
import { persistor } from "../store";

const Home = ()=>{
    interface Block {
        title: string,
        images: string[]
    }

    
    const {width} = Dimensions.get("screen");
    const heigth = width;
    const Dispatch = useDispatch();
    const {dataReducer} = useSelector((state:ApplicationState)=>state)
    const fetchData = ()=>Dispatch(getData())
    const {pag} = dataReducer
   
    
   

    type data = Block[];

    const data = defaultData
    
    const randomInt = (min: number,max:number)=>{
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const selectorImage = randomInt(0,3) // select random number incluide 0 and excluide 3 [0,3)

    const onPressNext = ()=>{
        
        Dispatch({type:Actions.NEXT})
      }
    
    const onPressPre = ()=>{
        Dispatch({type:Actions.PREVIOUS})

    }


   

    return(
        <Container>
            <Wrapper>


            <PreviousButton currentPage={pag} onPress={onPressPre}/>
            
                {
                    data[pag] && (

                        <Image
                            style={{height:400,width:'85%'}}
                            source={{uri:data[pag].images[selectorImage]}}
                            ></Image>
                    )
                }
                    
             
            
            
                <NextButton currentPage={pag} onPress={onPressNext}/>
            </Wrapper>
                {
                    data[pag] && (
                        <ContainerText>
                        
                                    <Text>{data[pag].title}</Text>
                                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>

                                    </ContainerText>
                    )
                }
            
            
        </Container>
    )
}

export default Home;
