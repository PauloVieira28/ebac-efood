import { Cards, HighlightCategories, Notes, Img, Container, Categories, ImageContainer, CategoriesNotes, Dish, Header, Rating, Button, Text } from "./styles"
import Restaurants from "../../pages/Restaurants"

import { Link } from "react-router-dom"

import estrela from "../../assets/estrela.png"


const Banners = () => (

  <Container>
    {Restaurants.map((restaurant) => (
    <Cards key={restaurant.id}>
      <ImageContainer>
        <Img src={restaurant.image} alt={restaurant.typeDish} />
        <Categories>
          <HighlightCategories>
            {restaurant.typeDish}
          </HighlightCategories>
          <HighlightCategories>
            {restaurant.destaque ? "Destaque" : ""}
          </HighlightCategories>
        </Categories>
      </ImageContainer>
      <CategoriesNotes>
        <Header>
          <Dish>{restaurant.name}</Dish>

          <Rating>
            <Notes>{restaurant.note}</Notes>
            <img src={estrela} alt="classificação" />
          </Rating>
        </Header>

        <Text>{restaurant.description}</Text>
        <Button as={Link} to={`/restaurants/${restaurant.id}`}>Saiba mais</Button>
      </CategoriesNotes>
    </Cards>
    ))}
  </Container>


)

export default Banners
