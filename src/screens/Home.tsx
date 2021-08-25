import React from "react";
import { useEffect } from "react";
import { Text, Image, Dimensions } from "react-native";
import { Container, ContainerText, Wrapper, WrapperTitle } from "./Styled";
import { Actions, getData } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import NextButton from "../components/Buttons/NextButton";
import PreviousButton from "../components/Buttons/PreviousButton";
import { ApplicationState } from "../reducer";
import { StyleText } from "../components/Buttons/StyledButtons";
import ProgressCarrousel from "../components/ProgressCarousel/ProgressCarousel";
import { FontAwesome } from "@expo/vector-icons";
import { DescriptionText } from "../components/ProgressCarousel/Styled";

interface Block {
  title: string;
  images: string[];
}
export type data = Block[];

const Home = () => {
  const Dispatch = useDispatch();
  const { dataReducer } = useSelector((state: ApplicationState) => state);
  const { pag } = dataReducer;

  const data: data = dataReducer.data;

  const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const selectorImage = randomInt(0, 3); // select random number incluide 0 and excluide 3 [0,3)

  const onPressNext = () => {
    Dispatch({ type: Actions.NEXT });
  };

  const onPressPre = () => {
    Dispatch({ type: Actions.PREVIOUS });
  };

  useEffect(() => {
    Dispatch(getData());
  }, []);

  if (data.length > 0) {
    return (
      <Container>
        <Wrapper>
          <PreviousButton currentPage={pag} onPress={onPressPre} />

          <Image
            style={{ height: 400, width: "85%" }}
            source={{ uri: data[pag].images[selectorImage] }}
          ></Image>

          <NextButton currentPage={pag} onPress={onPressNext} />
        </Wrapper>
        <ProgressCarrousel Blocks={data} pag={pag}></ProgressCarrousel>

        <ContainerText>
          <WrapperTitle>
            <StyleText>{data[pag].title}</StyleText>
            <FontAwesome name="camera" size={24} color="black" />
          </WrapperTitle>

          <DescriptionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
            quisquam magni, rerum quibusdam hic doloribus esse aperiam! 😎
          </DescriptionText>
        </ContainerText>
      </Container>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};

export default Home;
