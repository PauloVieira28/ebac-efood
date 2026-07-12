import { Container, Content, Img } from "./styles"

const HeaderDishesCards = () => (

  <>
    <Container>
      <Content>
        <p>Restaurantes</p>
        <img src="/src/assets/logo.png" alt="logo" />
        <p>0 produto(s) no carrinho</p>
      </Content>
    </Container>
    <div>
        <Img src="/src/assets/imagem-de-fundo-HeaderCards.png" alt="Imagem de fundo" />
    </div>
  </>

)

export default HeaderDishesCards
