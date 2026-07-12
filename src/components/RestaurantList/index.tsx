import { Cards, HighlightCategories, Notes, Img, Container, Categories, ImageContainer, CategoriesNotes, Dish, Header, Rating, Button, Text } from "./styles"
import Restaurants from "../../pages/Restaurants"

import { Link } from "react-router-dom"


const Banners = () => (

  <Container>
    {Restaurants.map((restaurant) => (
    <Cards>
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
            <img src="/src/assets/estrela.png" alt="classificação" />
          </Rating>
        </Header>

        <Text>{restaurant.description}</Text>
        <Link to={`/restaurants/${restaurant.id}`}>
          <Button>Saiba mais</Button>
        </Link>
      </CategoriesNotes>
    </Cards>
    ))}
  </Container>


)

export default Banners
