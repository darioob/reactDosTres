import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import { Home, NotFound, Pokemones, Detalle } from './layout'

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemones' element={<Pokemones />} />
        <Route path='/pokemones/:name' element={<Detalle />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
