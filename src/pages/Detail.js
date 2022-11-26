import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const GreenButton = styled.button`
  background: green;
  color: #fff;
  padding: 10px;
`
const MainImage = styled.img`
  display: block;
  width: 100%;
`

const Detail = ({ shoes }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)

  let target = shoes.find((it) => String(it.id) === id)

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
    <Container>
      <Row>
        <Col md={6}>
          {alert ? (
            <div className="alert alert-warning">2초 이내 구매시 할인!</div>
          ) : null}
          <MainImage
            src={`https://codingapple1.github.io/shop/shoes${target.id}.jpg`}
            alt="이미지"
            aria-label={`${target.title}의 이미지`}
          />
        </Col>
        <Col md={6}>
          <h4>{target.title}</h4>
          <p>{target.content}</p>
          <p>￦ {target.price.toLocaleString()}</p>
          <button className="btn btn-danger">주문하기</button>
          <p>{count}</p>
          <GreenButton
            onClick={() => {
              setCount(count + 1)
            }}
          >
            버튼
          </GreenButton>
        </Col>
      </Row>
    </Container>
  )
}

export default Detail
