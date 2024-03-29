import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './layouts/Navigation'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Event from './pages/Event'
import ShoesList from './util/shoesList'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/_normalize.css'
import './styles/_reset.css'
import './App.css'
import Best from './pages/Best'
import About from './pages/About'
import Cart from './pages/Cart'

function App() {
  let [shoes, setShoes] = useState(ShoesList)

  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/best" element={<Best />} />
        {/* <Route path="/product" element={<div>둘러보기</div>} /> */}
        <Route path="/chat" element={<div>수다방</div>} />
        <Route path="/event" element={<Event />}>
          <Route
            path="1"
            element={<div>첫 주문시 양배추즙을 드립니다!</div>}
          ></Route>
          <Route
            path="2"
            element={<div>생일 기념 쿠폰 받아가세요!</div>}
          ></Route>
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/*" element={<div>없는 페이지입니다.</div>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
