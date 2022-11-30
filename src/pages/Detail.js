import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Col, Container, Nav, Row } from 'react-bootstrap'
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

  const [count, setCount] = useState(0)
  const [alert, setAlert] = useState(true)
  const [tab, setTab] = useState(0)

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
        </Col>
      </Row>

      <Row>
        <Nav variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(0)
              }}
              eventKey="link-0"
            >
              버튼 1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(1)
              }}
              eventKey="link-1"
            >
              버튼 2
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(2)
              }}
              eventKey="link-2"
            >
              버튼 3
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent tab={tab} />
      </Row>
    </Container>
  )
}

function TabContent({ tab }) {
  return [<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]
  // if (tab === 0) {
  //   return <div>내용1</div>
  // }
  // if (tab === 1) {
  //   return <div>내용2</div>
  // }
  // if (tab === 2) {
  //   return <div>내용3</div>
  // }
}

export default Detail
