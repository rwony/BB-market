import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

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

const Home = ({ shoes, setShoes }) => {
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

          <button
            type="button"
            onClick={() => {
              axios
                .get(
                  'https://raw.githubusercontent.com/rwony/rwony.github.io/main/BB-market/data2.json'
                )
                .then((result) => {
                  const newData = [...shoes, ...result.data]
                  console.log(newData)
                  setShoes(newData)
                })
                .catch(() => {
                  console.log('Failed get data')
                })
            }}
          >
            더보기
          </button>
        </Row>
      </Container>
    </>
  )
}

export default Home
