import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

import { getFontColor } from '../util/common'

const FooterDiv = styled.footer`
  height: 100%;
  margin: 0 -12px;
  padding: 16px;
  background-color: #f7f8fa;
`
const FooterTitle = styled.h4`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 12px;
`
const FooterDetailItem = styled.div`
  display: flex;
  font-size: 11px;
  margin-bottom: 4px;

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
    margin-top: 1px;
    &::before {
      content: '|';
      display: inline-block;
      margin-right: 8px;
    }
  }

  a:hover,
  dd:hover {
    color: ${getFontColor('purple')};
  }
`

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <FooterDiv>
            <FooterTitle>빵빵마켓 BB-market</FooterTitle>

            <dl>
              <FooterDetailItem>
                <dt>대표이사</dt>
                <dd>이려원</dd>
              </FooterDetailItem>
              <FooterDetailItem>
                <dt>주소</dt>
                <dd>
                  <a href="https://github.com/rwony" target="_black">
                    https://github.com/rwony
                  </a>
                </dd>
              </FooterDetailItem>
              <FooterDetailItem>
                <dt>이메일</dt>
                <dd>
                  <address>
                    <a href="mailto:dev.rwlee@gmail.com">dev.rwlee@gmail.com</a>
                  </address>
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
