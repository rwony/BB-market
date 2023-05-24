import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { getColor } from '../util/common'
import { colorConditions } from '../util/common'

const PageTitle = styled.h1`
  padding: 16px 0;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.01em;
`
const PageContainer = styled.div`
  font-size: 13px;
  margin-bottom: 12px;
  letter-spacing: -0.02em;

  input[type='checkbox'] {
    width: 14px;
    height: 14px;
  }
`
const CartControlButtons = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: ${getColor('background')};

  & > div:first-child {
    display: flex;
    align-items: center;
    input[type='checkbox'] {
      margin: 0 8px;
    }
  }

  button {
    width: 50px;
    height: 20px;
    margin-right: 8px;
    color: ${getColor('white')};
    background-color: ${getColor('secondary')};
    font-size: 11px;
    border-radius: 8px;
    letter-spacing: -0.01em;
  }
`
const SectionContainer = styled.div`
  position: relative;

  h3 {
    width: 100%;
    padding: 10px 0 6px;
    margin-bottom: 0;
    font-size: 12px;
    border-bottom: 1px solid ${getColor('border')};
  }

  ul {
    li {
      position: relative;
      display: flex;
      padding: 14px 0;

      input[type='checkbox'] {
        margin-right: 4px;
      }

      button {
        position: absolute;
        top: 4px;
        right: 0;
        font-size: 20px;
      }
    }
  }
`

const ImageDiv = styled.div`
  max-width: 100px;
  margin: 0 6px;
  border-radius: 4px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    max-width: 100%;
  }
`

const ProductDiv = styled.div`
  width: calc(100% - 140px);

  & > :first-child {
    margin-bottom: 4px;
  }

  .tit {
    margin-bottom: 4px;
    word-break: keep-all;
  }
`

const StyledSpan = styled.span`
  &:not(:last-child) {
    margin-right: 4px;
  }
  color: ${(props) => {
    for (const condition in colorConditions) {
      if (condition in props) {
        const style = colorConditions[condition](props)
        if (style) {
          return style.color
        }
      }
    }
    return getColor('tertiary')
  }};
  font-size: ${(props) => (props.size ? `${props.size}px` : '13px')};
  font-weight: ${(props) => {
    for (const condition in colorConditions) {
      if (condition in props) {
        const style = colorConditions[condition](props)
        if (style) {
          return style.fontWeight
        }
      }
    }
    return 'normal'
  }};
  text-decoration: ${(props) => (props.original ? 'line-through' : 'normal')};
`

const Cart = () => {
  const cartState = useSelector((state) => state.cart)
  console.log(cartState)

  return (
    <Container>
      <Row>
        <Col sm>
          <PageTitle>장바구니</PageTitle>

          <PageContainer>
            <CartControlButtons>
              <div>
                <input type={'checkbox'} value="All" />
                <span>전체선택</span>
              </div>
              <div>
                <button type="button">전체삭제</button>
              </div>
            </CartControlButtons>

            <SectionContainer>
              {cartState.map((it, i) => (
                <section key={i}>
                  <h3>{it.brand}</h3>

                  <ul>
                    <li>
                      <input type="checkbox" value={it.id} />

                      <ImageDiv>
                        <img src={it.thumbnail} alt={`${it.title}의 이미지`} />
                      </ImageDiv>

                      <ProductDiv>
                        <div>
                          <p className="tit">{it.title}</p>
                          <span>옵션명: </span>
                          <span>주문수량: {it.count}</span>
                        </div>

                        <div>
                          <StyledSpan discount>42%</StyledSpan>
                          <StyledSpan original>
                            {it.originalPrice.toLocaleString()}원
                          </StyledSpan>
                          <StyledSpan price size={14}>
                            {it.price.toLocaleString()}원
                          </StyledSpan>
                        </div>
                        <StyledSpan size={12}>
                          {parseInt(it.price) * 0.01}원 적립
                        </StyledSpan>
                      </ProductDiv>

                      <button type="button">×</button>
                    </li>
                  </ul>
                </section>
              ))}
            </SectionContainer>
          </PageContainer>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart
