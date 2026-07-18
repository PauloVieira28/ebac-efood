import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.fund};
  margin: 0 auto;
  padding-top: 32px;

  display: grid;
  grid-template-columns: repeat(2, 472px);
  justify-content: center;
  gap: 32px;
  color: ${colors.vibrantSalmon};
  font-size: 14px;
`

export const Cards = styled.div`
  width: 100%;
  height: 398px;
  padding: 2px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${colors.white};

`

export const ImageContainer = styled.div`
  position: relative;
`

export const Img = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;

`;

export const Categories = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;

`



export const HighlightCategories = styled.p`
  font-size: 12px;
  font-weight: bold;
  background-color: ${colors.vibrantSalmon};
  color: ${colors.white};
  padding: 8px;

`

export const CategoriesNotes = styled.div`
  border: 1px solid ${colors.vibrantSalmon};
  width: 100%;
  margin-top: -4px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    width: 19px;
    height: 19px;
    margin-right: 4px;

  }
`


export const Dish = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
`

export const Notes = styled.p`
  font-size: 16px;
  font-weight: bold;

`

export const Button = styled.button`

  width: 82px;
  height: 24px;
  padding: 2px;
  background-color: ${colors.vibrantSalmon};
  color: ${colors.white};
  border: none;
  cursor: pointer;
  margin: 24px 8px 8px;
  align-self: flex-start;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.p`

  padding: 8px;
  font-size: 12px;
  line-height: 18px;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
