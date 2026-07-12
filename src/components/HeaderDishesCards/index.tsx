import { Container, Content, Img } from "./styles"

import logo from '../../assets/logo.png'
import fundo from '../../assets/imagemFundoHeaderCards.png'


const HeaderDishesCards = () => (

  <>
    <Container>
      <Content>
        <p>Restaurantes</p>
        <img src={logo} alt="logo" />
        <p>0 produto(s) no carrinho</p>
      </Content>
    </Container>
    <div>
        <Img src={fundo} alt="Imagem de fundo" />
    </div>
  </>

)

export default HeaderDishesCards
