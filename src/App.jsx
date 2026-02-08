import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Store from './pages/Store'
import ConstructionOrder from './pages/ConstructionOrder'
import CarburantOrder from './pages/CarburantOrder'
import AssainissementOrder from './pages/AssainissementOrder'
import Cart from './pages/Cart'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import ConditionsUtilisation from './pages/ConditionsUtilisation'
import './App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/store" element={<Store />} />
          <Route path="/construction" element={<ConstructionOrder />} />
          <Route path="/carburant" element={<CarburantOrder />} />
          <Route path="/assainissement" element={<AssainissementOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
