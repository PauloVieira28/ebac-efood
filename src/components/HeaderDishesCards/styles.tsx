import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`

  height: 186px;
  background-color: ${colors.salmon};

  p {
    color: ${colors.vibrantSalmon};
    font-family: 'Roboto';
    font-weight: 900;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
  }


`

export const Content = styled.div`

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
  padding: 75px 0;

`

export const ImageWrapper = styled.div`
  position: relative;
`

export const Img = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`

export const Type = styled.p`
  position: absolute;
  top: 1px;
  left: 50%;
  transform: translateX(-512px);
  width: 101px;
  height: 33.25px;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-top: 25px;
`

export const Name = styled.h1`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-512px);
  width: 676px;
  height: 40px;
  color: ${colors.white};
  font-size: 34px;
  font-weight: 900;
  line-height: 40px;
`
