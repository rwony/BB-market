import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

import MainImage from '../images/bg.png'
import Card from '../component/Card'

const MainImageDiv = styled.div`
  height: 450px;
  background-color: yellow;
  background-image: url(${MainImage});
  background-size: cover;
  background-position: center;
`
const ProductImageGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`

const Home = ({ shoes }) => {
  return (
    <>
      <MainImageDiv />

      <Container>
        <Row>
          <ProductImageGroup>
            {shoes.map((shoes, i) => (
              <Card data={shoes} key={i} />
            ))}
          </ProductImageGroup>
        </Row>
      </Container>
    </>
  )
}

export default Home
