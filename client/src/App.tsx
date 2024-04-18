import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LoginPage, MainPage, RegPage, MainMenuPage, StatsPage, GamePage, BoomerangPage, RPGPage } from './pages'
import { ChooseCharacter, FlashCardsGame } from './components'
import Gladiator from './components/Gladiator/Gladiator'
import Modals from './components/Modals/Modals'
import Video from './components/video/Video'
import ProtectedRoute from './components/router/ProtectedRoute'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegPage />} />
        <Route path='/menu' element={<MainMenuPage />} />

        {/* <Route element={<ProtectedRoute isLogin={false} redirecteTo='/' />}> */}
            <Route path='/stats' element={<StatsPage />} />
            <Route path='/newgame' element={<GamePage />} />
            <Route path='/game' element={<FlashCardsGame />} />
            <Route path='/boomerang' element={<BoomerangPage />} />
            <Route path='/phase/:id' element={<RPGPage />} />
            <Route path='/gladiator' element={<Gladiator />} />
            <Route path='/char' element={<ChooseCharacter />} />
            <Route path='/end' element={<Video />} />
        {/* </Route>1 */}
        
        {/* <Route path='/stats' element={<StatsPage />} />
        <Route path='/newgame' element={<GamePage />} />
        <Route path='/game' element={<FlashCardsGame />} />
        <Route path='/boomerang' element={<BoomerangPage />} />
        <Route path='/phase/:id' element={<RPGPage />} />
        <Route path='/gladiator' element={<Gladiator />} />
        <Route path='/char' element={<ChooseCharacter />} />
        <Route path='/end' element={<Video />} /> */}
      </Routes>
      <Modals />
    </>
  )
}

export default App
