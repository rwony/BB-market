import { useState } from 'react'
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
  const [addButton, setAddButton] = useState(true)
  const [moreButton, setMoreButton] = useState(1)

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

          {addButton ? (
            <button
              type="button"
              onClick={() => {
                setMoreButton(moreButton + 1)

                if (moreButton === 2) {
                  setAddButton(false)
                }

                axios
                  .get(
                    `https://raw.githubusercontent.com/rwony/rwony.github.io/main/BB-market/data${moreButton}.json`
                  )
                  .then((result) => {
                    const newData = [...shoes, ...result.data]
                    setShoes(newData)
                  })
                  .catch(() => {
                    console.log('Failed get data')
                  })
              }}
            >
              더보기
            </button>
          ) : null}
        </Row>
      </Container>
    </>
  )
}

export default Home
