import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Characters from './pages/Characters.jsx'
import CharactersDetails from './pages/CharactersDetails.jsx'

function Rotas() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/characters" element={<Characters />} />
      <Route exact path="/characters/:id" element={<CharactersDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas