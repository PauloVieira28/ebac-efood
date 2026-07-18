import { Headers, Img, Title } from "./styles"

import logo from '../../assets/logo.png'


const HeaderHome = ( ) => (
  <Headers>
    <Img src={logo} alt="logo" />
    <Title>Viva experiências gastronômicas<br />no conforto da sua casa</Title>
  </Headers>
)

export default HeaderHome
