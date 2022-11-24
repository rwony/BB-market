import { Routes, Route } from 'react-router-dom'

import Navigation from './layouts/Navigation'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Event from './pages/Event'

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
        <Route path="/cart" element={<div>장바구니</div>} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/*" element={<div>없는 페이지입니다.</div>} />
      </Routes>
    </div>
  )
}

export default App
