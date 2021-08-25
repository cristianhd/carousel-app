import { Dimensions } from 'react-native';
import styled from 'styled-components/native'
const {width} = Dimensions.get("screen")

export const Container = styled.View`
    position: relative;
    background: white;
    height: 550px;
    width: auto;
    margin: 30px;
    border-radius: 20px;
    
    
    
    
`;

export const Wrapper = styled.View`
padding: 20px 0px 10px 0px;
display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

`;

export const ContainerText = styled.View`
    padding: 5px 40px 10px 30px;
    
`;