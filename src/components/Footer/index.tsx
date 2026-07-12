import { Container, Footers } from "./styles"

import instragram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'

import logo from '../../assets/logo.png'


const Footer = () => (
  <Footers>
    <img src={logo} alt="logo" />
    <Container>
      <img src={instragram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={Twitter} alt="twitter" />
    </Container>
    <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> dos produtos é toda do estabelecimento contratado. </p>
  </Footers>
)

export default Footer
