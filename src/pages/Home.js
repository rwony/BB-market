import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

import Card from '../component/Card'

const BannerContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`
const BannerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const BannerCol = styled.div`
  width: 100%;
`

const MainImageDiv = styled.div`
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL + './assets/banner/1.jpg'});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const MainBannerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  background-color: azure;
  overflow: hidden;

  & > img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    height: 400px;
  }
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
      <BannerContainer>
        <BannerRow>
          <BannerCol>
            <MainBannerDiv>
              <MainImageDiv />
              {/* <img src={process.env.PUBLIC_URL + `./assets/banner/1.jpg`} /> */}
              {/* <img src={process.env.PUBLIC_URL + `./assets/banner/2.png`} />
        <img src={process.env.PUBLIC_URL + `./assets/banner/3.png`} /> */}
            </MainBannerDiv>
          </BannerCol>
        </BannerRow>
      </BannerContainer>

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
