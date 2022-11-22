import { useState } from 'react'
import { Button, Navbar, Container, Row, Nav, Col } from 'react-bootstrap'

import ShoesList from './util/shoesList'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ProductList from './component/ProductList'

function App() {
  let [shoes, setShoes] = useState(ShoesList)

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="logo" href="/">
            ShowMarket
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          <div className="product-image-group">
            {shoes.map((shoes) => (
              <ProductList data={shoes} />
            ))}
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default App
