import type Restaurant from "../../models/Restaurant"
import { Container, Content, Img, ImageWrapper, Name, Type } from "./styles"

import logo from '../../assets/logo.png'
import fundo from '../../assets/imagemFundoHeaderCards.png'

type Props = {
  restaurant: Restaurant
}

const HeaderDishesCards = ({ restaurant }: Props) => (

  <>
    <Container>
      <Content>
        <p>Restaurantes</p>
        <img src={logo} alt="logo" />
        <p>0 produto(s) no carrinho</p>
      </Content>
    </Container>
    <ImageWrapper>
        <Img src={fundo} alt="Imagem de fundo" />
        <Type>{restaurant.typeDish}</Type>
        <Name>{restaurant.name}</Name>
    </ImageWrapper>
  </>

)

export default HeaderDishesCards
