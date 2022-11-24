import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'

import ShoesList from '../util/shoesList'
import Card from '../component/Card'

const Home = () => {
  let [shoes, setShoes] = useState(ShoesList)

  return (
    <>
      <div className="main-bg"></div>

      <Container>
        <Row>
          <div className="product-image-group">
            {shoes.map((shoes, i) => (
              <Card data={shoes} key={i} />
            ))}
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Home
