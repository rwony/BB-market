import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const GreenButton = styled.button`
  background: green;
  color: #fff;
  padding: 10px;
`
const Detail = ({ shoes }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  let target = shoes.find((it) => String(it.id) === id)

  return (
    <Container>
      <Row>
        <Col md={6}>
          <img
            src={`https://codingapple1.github.io/shop/shoes${target.id}.jpg`}
            alt="이미지"
          />
        </Col>
        <Col md={6}>
          <h4>{target.title}</h4>
          <p>{target.content}</p>
          <p>￦ {target.price.toLocaleString()}</p>
          <button className="btn btn-danger">주문하기</button>
          <GreenButton>버튼</GreenButton>
        </Col>
      </Row>
    </Container>
  )
}

export default Detail
