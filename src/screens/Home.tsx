import React from "react";
import { useEffect } from "react";
import { View, Text,Image, Dimensions, GestureResponderEvent } from "react-native";
import { Container, ContainerText, Wrapper, WrapperTitle } from "./Styled";
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
import { StyleText } from "../components/Buttons/StyledButtons";
import ProgressCarrousel from "../components/Buttons/ProgressCarousel/ProgressCarousel";
import { FontAwesome } from '@expo/vector-icons';
import { DescriptionText } from "../components/Buttons/ProgressCarousel/Styled";
interface Block {
    title: string,
    images: string[]
}
export type data = Block[];

const Home = ()=>{

    
    const {width} = Dimensions.get("screen");
    const heigth = width;
    const Dispatch = useDispatch();
    const {dataReducer} = useSelector((state:ApplicationState)=>state)
    const fetchData = ()=>Dispatch(getData())
    const {pag} = dataReducer
   
    
   


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

useEffect(()=>{
   
    fetchData()
},[])
   

    return(
        <Container>
            <Wrapper>


            <PreviousButton currentPage={pag} onPress={onPressPre}/>
            
                {
                    data[pag] && (
                        
                            
                            <Image
                                style={{height:400,width:'85%'}}
                                source={{uri:data[pag].images[selectorImage]}}
                                >


                                </Image>
                      

                    )
                }
                    
             
            
            
                <NextButton currentPage={pag} onPress={onPressNext}/>
            </Wrapper>
                            <ProgressCarrousel Blocks={data} pag={pag}></ProgressCarrousel>
                {
                    data[pag] && (
                        <ContainerText>
                            <WrapperTitle>
                                    <StyleText>{data[pag].title}</StyleText>
                                    <FontAwesome name="camera" size={24} color="black" />

                            </WrapperTitle>
                        

                                    <DescriptionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste quisquam magni, rerum quibusdam hic doloribus esse aperiam! 😎</DescriptionText>
                                    
                                    </ContainerText>
                    )
                }
            
            
        </Container>
    )
}

export default Home;
