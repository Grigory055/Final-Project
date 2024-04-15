import './App.css'
import { Route, Routes } from 'react-router-dom'
import { InfoPage, LoginPage, MainPage, RegPage, MainMenuPage, StatsPage, GamePage, BoomerangPage, RPGPage } from './pages'
import { ChooseCharacter, FlashCardsGame } from './components'
import Gladiator from './components/Gladiator/Gladiator'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegPage />} />
        <Route path='/menu' element={<MainMenuPage />} />
        <Route path='/stats' element={<StatsPage />} />
        <Route path='/newgame' element={<GamePage />} />
        <Route path='/game' element={<FlashCardsGame />} />
        <Route path='/boomerang' element={<BoomerangPage />} />
        <Route path='/phase/:id' element={<RPGPage />} />
        <Route path='/gladiator' element={<Gladiator />} />
        <Route path='/char' element={<ChooseCharacter />} />
      </Routes>
    </>
  )
}

export default App
