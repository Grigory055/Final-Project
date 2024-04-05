import './App.css'
import { Route, Routes } from 'react-router-dom'
import { InfoPage, LoginPage, MainPage, RegPage, MainMenuPage, StatsPage } from './pages'
import { Container } from '@mui/material'
import { Navbar } from './components'

function App() {
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
        </Routes>
      </Container>
    </>
  )
}

export default App
