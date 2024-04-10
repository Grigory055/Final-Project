import './App.css'
import { Route, Routes } from 'react-router-dom'
import { InfoPage, LoginPage, MainPage, RegPage, MainMenuPage, StatsPage, GamePage } from './pages'
import { Container } from '@mui/material'
import { Boomerang, FlashCardsGame, Navbar } from './components'

function App() {
  console.log('xxx');
  
  return (
    <>
      <Navbar />
      <Container id="main">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/info' element={<InfoPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegPage />} />
          <Route path='/menu' element={<MainMenuPage />} />
          <Route path='/stats' element={<StatsPage />} />
          <Route path='/newgame' element={<GamePage />} />
          <Route path='/game' element={<FlashCardsGame />} />
          <Route path='/boomerang' element={<Boomerang />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
