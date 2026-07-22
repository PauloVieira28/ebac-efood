import styled from "styled-components";
import { colors } from "../../styles";

export const Footers = styled.footer`
  width: 100%;
  height: 298px;
  margin: 0 auto;
  padding-top: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background-color: ${colors.salmon};

  color: ${colors.vibrantSalmon};
  font-size: 10px;


  img {
    width: 125px;
    height: 57.5px;
    margin: 16px 0;

  }
`

export const Container = styled.div`

    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 16px;

    img {
      width: 24px;
      height: 24px;
    }

`


