import './App.css'
import { Route, Routes } from 'react-router-dom'
import { InfoPage, LoginPage, MainPage, RegPage, MainMenuPage, StatsPage, GamePage, BoomerangPage, RPGPage } from './pages'
import { Container } from '@mui/material'

import QuestionsP0W1 from './components/Questions/QuestionsP0/QuestionsP0W1'
import QuestionsP0W2 from './components/Questions/QuestionsP0/QuestionsP0W2'
import QuestionsP0W3 from './components/Questions/QuestionsP0/QuestionsP0W3'
import QuestionsP1W1 from './components/Questions/QuestionsP1/QuestionsP1W1'
import QuestionsP1W2 from './components/Questions/QuestionsP1/QuestionsP1W2'
import QuestionsP1W3 from './components/Questions/QuestionsP1/QuestionsP1W3'
import QuestionsP2W1 from './components/Questions/QuestionsP2/QuestionsP2W1'
import QuestionsP2W2 from './components/Questions/QuestionsP2/QuestionsP2W2'
import QuestionsP3W1 from './components/Questions/QuestionsP3/QuestionsP3W1'
import { FlashCardsGame, Navbar } from './components'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/info' element={<InfoPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegPage />} />
        <Route path='/menu' element={<MainMenuPage />} />
        <Route path='/stats' element={<StatsPage />} />
        <Route path='/newgame' element={<GamePage />} />
        <Route path='/game' element={<FlashCardsGame />} />
        <Route path='/boomerang' element={<BoomerangPage />} />
        <Route path='/rpg' element={<RPGPage />} />
  {/* <QuestionsP0W1/>
      <QuestionsP0W2/>
      <QuestionsP0W3/>
      <QuestionsP1W1/>
      <QuestionsP1W2/>
      <QuestionsP1W3/>
      <QuestionsP2W1/>
      <QuestionsP2W2/>
      <QuestionsP3W1/> */}
      </Routes>
    </>
  )
}

export default App
