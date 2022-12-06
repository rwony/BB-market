import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const FooterDiv = styled.footer`
  height: 100%;
  margin: 0 calc(-0.5 * 1.5rem);
  padding: 24px 16px;
  text-align: center;
  background-color: #f7f8fa;
`
const FooterTitle = styled.h4`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 16px;
`
const FooterDetailItem = styled.div`
  margin-bottom: 4px;
  font-size: 11px;

  &:last-child {
    margin-bottom: 0;
  }

  dt,
  dd {
    margin-bottom: 0;
  }

  dt {
    margin-right: 8px;
    font-weight: 600;
    vertical-align: top;
  }

  dd {
    span {
      display: inline-block;
      margin-top: 1px;
    }

    &::before {
      content: '|';
      display: inline-block;
      margin-right: 8px;
    }
  }
`

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm>
          <FooterDiv>
            <FooterTitle>빵빵마켓 BB-market</FooterTitle>

            <dl>
              <FooterDetailItem>
                <dt>대표이사</dt>
                <dd>
                  <span>이려원</span>
                </dd>
              </FooterDetailItem>
              <FooterDetailItem>
                <dt>주소</dt>
                <dd>
                  <a href="https://github.com/rwony" target="_black">
                    <span>https://github.com/rwony</span>
                  </a>
                </dd>
              </FooterDetailItem>
              <FooterDetailItem>
                <dt>이메일</dt>
                <dd>
                  <address>
                    <a href="mailto:dev.rwlee@gmail.com">
                      <span>dev.rwlee@gmail.com</span>
                    </a>
                  </address>
                </dd>
              </FooterDetailItem>
              <FooterDetailItem>
                <dt>고객센터</dt>
                <dd>
                  <a href="tel:010-1234-5678">
                    <span>010-1234-5678</span>
                  </a>
                </dd>
              </FooterDetailItem>
            </dl>
          </FooterDiv>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
