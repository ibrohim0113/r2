import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Leaut from './Leaut/leaut'
import Manifold from './components/Manifold'
import Services from './components/Services'
import Info from './components/Info'
import CartPage from './components/CartPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Leaut />} >
            <Route index={true} element={<Manifold />} />
            <Route path="product" element={<Services />} />
            <Route path="product/:id" element={<Info />} />
            <Route path="basket" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
