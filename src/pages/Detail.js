import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Col, Container, Nav, Row } from 'react-bootstrap'
import styled, { css, keyframes } from 'styled-components'

const MainImage = styled.img`
  display: block;
  width: 100%;
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
  ${({ selected }) => {
    if (selected)
      return css`
        animation: ${fadeContent} 0.5s ease-in;
      `
  }}
`

const Detail = ({ shoes }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [alert, setAlert] = useState(true)
  const [tab, setTab] = useState(0)

  const target = shoes.find((it) => String(it.id) === id)

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

        <TabContent tab={tab} setTab={setTab} />
      </Row>
    </Container>
  )
}

function TabContent({ tab }) {
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
    <TabBox selected={state}>
      {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]}
    </TabBox>
  )
}

export default Detail
