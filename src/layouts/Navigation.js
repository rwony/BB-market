import { Navbar, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const MenuContainer = styled(Container)`
  overflow-x: auto;
`
const Logo = styled(Link)`
  flex-shrink: 0;
  margin-right: 16px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.05em;
`
const Menu = styled(Link)`
  flex-shrink: 0;
  margin-right: 8px;
  font-size: 14px;
  letter-spacing: -0.05em;
`

const Navigation = () => {
  let navigate = useNavigate()

  return (
    <Navbar bg="light" variant="light">
      <h1 className="visually-hidden" aria-hidden>
        빵빵마켓
      </h1>

      <MenuContainer>
        <Logo to={'/'}>빵빵마켓</Logo>
        <Menu to={'/about'}>About us</Menu>
        <Menu to={'/best'}>베스트</Menu>
        <Menu to={'/product'}>둘러보기</Menu>
        <Menu to={'/chat'}>수다방</Menu>
        <Menu to={'/event'}>이벤트</Menu>
        <Menu to={'/cart'}>장바구니</Menu>
      </MenuContainer>
    </Navbar>
  )
}

export default Navigation
