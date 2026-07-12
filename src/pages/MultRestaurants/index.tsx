import { useParams } from "react-router-dom"
import Restaurants from "../Restaurants"
import { Container, Page } from "./style"
import DishesCards from "../../components/DishesCards"

const MultRestaurants = () => {
  const { id } = useParams()

  const restaurant = Restaurants.find(item => item.id === Number(id))


    if(!restaurant) {
      return <h2>Restaurante não encontrado</h2>
    }


  return (
    <>
    <Page>
      <Container>


        <DishesCards restaurant={restaurant} />
      </Container>
    </Page>
    </>
  )
}

export default MultRestaurants
