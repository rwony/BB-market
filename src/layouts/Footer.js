import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { getColor } from '../util/common'

const FooterDiv = styled.footer`
  margin: 0 calc(-0.5 * 1.5rem) 0;
  padding: 24px 16px;
  background-color: #f7f8fa;

  ul {
    display: flex;
    justify-content: center;
    margin-bottom: 20px !important;
    padding-bottom: 20px;
    border-bottom: 1px solid ${getColor('border')};
    font-size: 12px;

    li {
      color: ${getColor('secondary')};
      letter-spacing: -0.03em;
      cursor: pointer;

      &:not(:last-child)::after {
        content: '';
        display: inline-block;
        width: 1px;
        height: 12px;
        background-color: ${getColor('tertiary')};
        margin: 0 8px;
        vertical-align: -2px;
      }
    }
  }

  h4 {
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 24px calc(100% - 700px);

    ul {
      li {
        &::after {
          content: '' !important;
          color: red;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 24px calc(100% - 1500px);

    h4 {
      font-size: 16px;
    }
  }
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
    width: 15%;
    margin-right: 8px;
    vertical-align: top;
  }

  dd {
    span {
      display: inline-block;
      margin-top: 1px;
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm>
          <FooterDiv>
            <div>
              <ul>
                <li>빵빵마켓 소개</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>이메일무단수집금지</li>
              </ul>
            </div>

            <h4>빵빵마켓 BB-market</h4>
            <dl>
              <FooterDetailItem>
                <dt>대표</dt>
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
