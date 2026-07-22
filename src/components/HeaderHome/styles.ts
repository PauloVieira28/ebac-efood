import styled from "styled-components";
import { colors } from "../../styles";

export const Headers = styled.div`
  width: 100%;
  height: 384px;
  background-color: ${colors.salmon};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  margin-bottom: 100px;

`

export const Title = styled.h1`
  text-align: center;
  color: ${colors.vibrantSalmon};
  margin-top: 64px;
`
