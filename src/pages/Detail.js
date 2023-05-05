import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Col, Container, Nav, Row } from 'react-bootstrap'
import styled, { css, keyframes } from 'styled-components'
import { getColor } from '../util/common'

import WishIcon from '../images/heart.png'
import WishFillIcon from '../images/heart-fill.png'

const TopCol = styled(Col)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }
`
const MainTopDiv = styled.section`
  margin: 0 -12px;
`
const MainImage = styled.img`
  display: block;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
`
const ProductTopInfo = styled.div`
  padding: 20px 0;
  margin: 0 -12px;
  color: ${getColor('dark')};
  border-bottom: 8px solid ${getColor('border')};

  @media screen and (min-width: 768px) {
    flex-grow: 1;
    border-bottom: none;
  }
`
const ProductInfo = styled.div`
  padding: 0 20px 20px;
  border-bottom: 1px solid ${getColor('border')};

  p {
    display: -webkit-inline-box;
    padding: 1px 4px 0;
    margin-bottom: 6px;
    font-size: 11px;
    color: ${getColor('secondary')};
    border: 1px solid ${getColor('border')};
    border-radius: 4px;
    letter-spacing: -0.02em;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (min-width: 768px) {
      font-size: 13px;
    }
  }

  h4 {
    display: -webkit-box;
    padding: 2px 0;
    font-size: 18px;
    letter-spacing: -0.02em;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (min-width: 768px) {
      margin-bottom: 16px;
      font-size: 26px;
    }
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
  }
`
const DisCountSpan = styled.span`
  margin-right: 8px;
  font-size: 18px;
  font-weight: 500;
  color: ${getColor('yellow')};
  letter-spacing: -0.04em;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
  }
`
const ProductPrice = styled.strong`
  margin-right: 12px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.04em;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
  }
`
const ProductOriginalPrice = styled.span`
  position: relative;
  display: inline-block;
  color: ${getColor('tertiary')};
  font-size: 14px;
  text-decoration: line-through;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
const DeliveryInfo = styled.div`
  padding: 20px 20px 0;
  font-size: 13px;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
  }
`
const InfoItem = styled.div`
  display: flex;
  font-weight: 500;

  dt {
    flex-shrink: 0;
    width: 75px;
    color: ${getColor('tertiary')};
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

const PurchaseInfo = styled.div`
  display: none;
  width: 100%;
  padding: 20px;
  background-color: ${getColor('background')};

  p {
    font-size: 14px;
    font-weight: 400;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`

const ProductNav = styled(Nav)`
  position: sticky;
  top: 60px;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  z-index: 40;
  margin: 0 -12px;
  background-color: ${getColor('white')};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.02em;

  & > .nav-item {
    position: relative;
    width: calc(100% / 3);
    text-align: center;
  }

  a {
    &:hover {
      border: none;
    }

    &.active {
      border: none;

      &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${getColor('yellow')};
      }
    }

    &:not(.active) {
      border-color: ${getColor('white')};
      color: gray;
    }

    @media screen and (min-width: 768px) {
      height: 60px;
      padding-top: 20px;
      font-size: 14px;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: 20px;
  }
`

const fadeContent = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transition: opcity .5s;
  }
`
const TabBox = styled.div`
  position: relative;
  ${({ selected }) => {
    if (selected)
      return css`
        animation: ${fadeContent} 0.3s ease-in;
      `
  }}
`
const Content = styled.img`
  display: block;
  width: 100%;
`
const OrderCta = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${getColor('white')};
  z-index: 1000;
  border-top: 1px solid ${getColor('border')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`
const WishButton = styled.button`
  width: 25px;
  height: 25px;
  margin: 4px 16px 0 22px;
  background-image: url(${WishIcon});
  background-repeat: no-repeat;
  background-size: cover;
`
const PurchaseButton = styled.button`
  flex-grow: 1;
  /* max-width: 200px; */
  height: 34px;
  margin-right: 16px;
  border-radius: 16px;
  font-size: 14px;
  color: ${getColor('white')};
  background-color: ${getColor('yellow')};
`

const Detail = ({ shoes }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [alert, setAlert] = useState(true)
  const [tab, setTab] = useState(0)

  const target = shoes.find((it) => String(it.id) === id)
  const discount =
    parseInt(target.originalPrice) !== 0
      ? (
          ((parseInt(target.price) - parseInt(target.originalPrice)) /
            parseInt(target.originalPrice)) *
          -100
        )
          .toString()
          .substring(0, 2)
      : null

  useEffect(() => {
    // mount, update시 코드 실행됨
    let a = setTimeout(() => {
      setAlert(false)
    }, 2000)

    return () => {
      clearTimeout(a)
    }
  }, [])

  return (
    <>
      <Container>
        <Row>
          <TopCol sm md={6}>
            {alert ? (
              <div className="alert alert-warning">2초 이내 구매시 할인!</div>
            ) : null}
            <MainTopDiv>
              <div>
                <MainImage
                  src={target.thumbnail}
                  alt={`${target.title}의 메인 이미지`}
                />
              </div>

              {/* <ProductTopInfo>
                <ProductInfo>
                  <p>{target.brand}</p>
                  <h4>{target.title}</h4>
                  {discount !== '0' && discount !== null ? (
                    <DisCountSpan aria-label={`할인율 ${discount}%`}>
                      {discount}%
                    </DisCountSpan>
                  ) : null}
                  <ProductPrice aria-label={`판매가격 ${target.price}원`}>
                    {target.price.toLocaleString()}원
                  </ProductPrice>
                  {parseInt(target.originalPrice) !== 0 ? (
                    <ProductOriginalPrice
                      aria-label={`할인 전 가격 ${target.originalPrice}원`}
                    >
                      {target.originalPrice.toLocaleString()}원
                    </ProductOriginalPrice>
                  ) : null}
                </ProductInfo>

                <DeliveryInfo>
                  <dl>
                    <InfoItem>
                      <dt>배송안내</dt>
                      <dd>업체 직접 배송</dd>
                    </InfoItem>
                    <InfoItem>
                      <dt>배송정보</dt>
                      <dd>우체국택배</dd>
                    </InfoItem>
                    <InfoItem>
                      <dt>배송비</dt>
                      <dd>무료배송</dd>
                    </InfoItem>
                  </dl>
                </DeliveryInfo>

                <PurchaseInfo>
                  <p>{target.title}</p>
                  <div>
                    <button type="button">-</button>
                    <input type={'text'} value="1" />
                    <button type="button">+</button>
                  </div>
                  <div>
                    <button type="button">X</button>
                    <span></span>
                  </div>
                </PurchaseInfo>
              </ProductTopInfo> */}
            </MainTopDiv>
          </TopCol>
          <TopCol sm md={6}>
            <ProductTopInfo>
              <ProductInfo>
                <p>{target.brand}</p>
                <h4>{target.title}</h4>
                {discount !== '0' && discount !== null ? (
                  <DisCountSpan aria-label={`할인율 ${discount}%`}>
                    {discount}%
                  </DisCountSpan>
                ) : null}
                <ProductPrice aria-label={`판매가격 ${target.price}원`}>
                  {target.price.toLocaleString()}원
                </ProductPrice>
                {parseInt(target.originalPrice) !== 0 ? (
                  <ProductOriginalPrice
                    aria-label={`할인 전 가격 ${target.originalPrice}원`}
                  >
                    {target.originalPrice.toLocaleString()}원
                  </ProductOriginalPrice>
                ) : null}
              </ProductInfo>

              <DeliveryInfo>
                <dl>
                  <InfoItem>
                    <dt>배송안내</dt>
                    <dd>업체 직접 배송</dd>
                  </InfoItem>
                  <InfoItem>
                    <dt>배송정보</dt>
                    <dd>우체국택배</dd>
                  </InfoItem>
                  <InfoItem>
                    <dt>배송비</dt>
                    <dd>무료배송</dd>
                  </InfoItem>
                </dl>
              </DeliveryInfo>

              <PurchaseInfo>
                <p>{target.title}</p>
                <div>
                  <button type="button">-</button>
                  <input type={'text'} value="1" />
                  <button type="button">+</button>
                </div>
                <div>
                  <button type="button">X</button>
                  <span></span>
                </div>
              </PurchaseInfo>
            </ProductTopInfo>
          </TopCol>
        </Row>

        <Row>
          <Col>
            <ProductNav variant="tabs" defaultActiveKey="link-0">
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    setTab(0)
                  }}
                  eventKey="link-0"
                >
                  상품정보
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    setTab(1)
                  }}
                  eventKey="link-1"
                >
                  리뷰
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    setTab(2)
                  }}
                  eventKey="link-2"
                >
                  교환/환불
                </Nav.Link>
              </Nav.Item>
            </ProductNav>

            <TabContent
              tab={tab}
              title={target.title}
              content={target.content}
            />
          </Col>
        </Row>
      </Container>

      <OrderCta>
        <WishButton type="button"></WishButton>
        <PurchaseButton type="button">구매하기</PurchaseButton>
      </OrderCta>
    </>
  )
}

function TabContent({ tab, title, content }) {
  const [state, setState] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setState(true)
    }, 100)

    return () => {
      setState(false)
    }
  }, [tab])

  return (
    <>
      <TabBox selected={state}>
        {
          [
            <div>
              <Content src={content} alt={`${title}의 상세 이미지`} />
            </div>,
            <div>내용2</div>,
            <div>내용3</div>,
          ][tab]
        }
      </TabBox>
    </>
  )
}

export default Detail
