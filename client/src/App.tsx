import { Route, Routes } from 'react-router-dom'
import { InfoPage, LoginPage, MainPage } from './pages'
import { Container } from '@mui/material'
import { Navbar } from './components'

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/info' element={<InfoPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Container>
  )
}

export default App
