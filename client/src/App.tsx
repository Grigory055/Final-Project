import './App.css'
import { Route, Routes } from 'react-router-dom'
import { MainPage, StatsPage, RPGPage } from './pages'
import Modals from './components/Modals/Modals'
import Video from './components/video/Video'
import ProtectedRouterEnd from './components/router/ProtectedRouterEnd'
import ProjectedRouterStat from './components/router/ProjectedRouterStat'
import ProjectedRouterLevelPhase from './components/router/ProjectedRouterLevelPhase'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        
        <Route element={<ProtectedRouterEnd />}>
          <Route path='/end' element={<Video />} />
        </Route>

        <Route element={<ProjectedRouterStat />}>
          <Route path='/stats' element={<StatsPage />} />
        </Route>

        <Route element={<ProjectedRouterLevelPhase />}>
          <Route path='/phase/:id' element={<RPGPage />} />
        </Route>
        
      </Routes>
      <Modals />
    </>
  )
}

export default App
