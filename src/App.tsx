import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { GlobalCss } from './styles'
import { Home } from './pages/Home'
import MultRestaurants from './pages/MultRestaurants'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <GlobalCss/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id" element={<MultRestaurants />} />
        <Route path="*" element={<h2>Página não encontrada</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
