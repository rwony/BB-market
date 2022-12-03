import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const textStyle12 = '12px'

const FooterDiv = styled.footer`
  height: 100%;
  margin: 0 -12px;
  padding: 16px;
  background-color: #f7f8fa;
`
const FooterTitle = styled.h4`
  font-size: ${textStyle12};
  font-weight: 700;
  margin-bottom: 12px;
`
const FooterContent = styled.p`
  font-size: ${textStyle12};
  margin-bottom: 2px;
`

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <FooterDiv>
            <FooterTitle>빵빵마켓 BB-market</FooterTitle>
            <FooterContent>대표이사: 이려원</FooterContent>
            <FooterContent>주소: 서울 송파구 삼전동</FooterContent>
            <FooterContent>dev.rwlee@gmail.com</FooterContent>
            <FooterContent>https://github.com/rwony</FooterContent>
          </FooterDiv>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
