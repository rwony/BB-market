import { Routes, Route, Link } from 'react-router-dom'

import Navigation from './layouts/Navigation'
import Home from './pages/Home'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>ABOUT</div>} />
        <Route path="/best" element={<div>베스트</div>} />
        <Route path="/product" element={<div>둘러보기</div>} />
        <Route path="/chat" element={<div>수다방</div>} />
        <Route path="/event" element={<div>이벤트</div>} />
        <Route path="/cart" element={<div>장바구니</div>} />
      </Routes>
    </div>
  )
}

export default App
