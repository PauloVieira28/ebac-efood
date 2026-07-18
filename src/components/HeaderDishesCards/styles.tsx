import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`

  height: 186px;
  background-color: ${colors.salmon};

  p {
    color: ${colors.vibrantSalmon};
    font-weight: 900;
  }


`

export const Content = styled.div`

  display: flex;
  flex-direction: row;

  justify-content: space-around;
  padding: 75px 0;

`

export const Img = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`
