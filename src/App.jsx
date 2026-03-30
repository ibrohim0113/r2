import { BrowserRouter, Route, Routes } from 'react-router'
import Leaut from './Leaut/leaut'
import Manifold from './components/Manifold'
import Services from './components/Services'
import Info from './components/info'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Leaut />} >
            <Route index={true} element={<Manifold />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Services/product/:productId" element={<Info />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
