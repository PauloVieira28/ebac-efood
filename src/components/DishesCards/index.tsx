import type Restaurant from "../../models/Restaurant"
import HeaderDishesCards from "../HeaderDishesCards"
import { Button, Card, Container, Description, Img, Title } from "./styles"


type Props = {
  restaurant: Restaurant
}

const DishesCards = ({restaurant}: Props) => (

<>
  <HeaderDishesCards restaurant={restaurant} />

  <Container>
    {restaurant.imageCard.map((item, index) => (
      <Card key={`${item.title}-${index}`}>
        <Img src={item.image} alt={item.title} />
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Button>Adicionar ao carrinho</Button>
      </Card>
    ))}
  </Container>
</>
)

export default DishesCards


