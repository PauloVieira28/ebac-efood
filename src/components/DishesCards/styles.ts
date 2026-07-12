import styled from "styled-components";
import { colors } from "../../styles";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 24px;
  justify-content: center;
  margin: 40px 0;
  width: 100%;
`

export const Card = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: ${colors.vibrantSalmon};

`

export const Img = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const Description = styled.p`
  margin-top: 10px;
  min-height: 100px;
  color: ${colors.salmon};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`

export const Button = styled.button`

  width: 100%;
  height: 24px;
  background-color: ${colors.fund};
  color: ${colors.vibrantSalmon};
  border: none;

  margin-top: 24px;
  font-weight: 700;

  cursor: pointer;

  transition: background-color 0.3s ease;

    &:hover {
    background-color: ${colors.salmon};
  }


`

export const Title = styled.h1`
  margin-top: 12px;
  color: ${colors.white};
  font-size: 16px;
  font-weight: 900;
`

