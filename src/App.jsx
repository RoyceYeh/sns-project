import './App.css'
import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/signin'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/signin'} element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
