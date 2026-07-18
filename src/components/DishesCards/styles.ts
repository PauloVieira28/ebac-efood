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
  height: 338px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: ${colors.vibrantSalmon};
  overflow: hidden;

`

export const Img = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  flex-shrink: 0;
`

export const Description = styled.p`
  margin-top: 10px;
  color: ${colors.salmon};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  height: 44px;
  flex-shrink: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Button = styled.button`

  width: 100%;
  height: 24px;
  background-color: ${colors.fund};
  color: ${colors.vibrantSalmon};
  border: none;

  margin-top: auto;
  flex-shrink: 0;
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
  flex-shrink: 0;
`

