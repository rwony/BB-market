import { Navbar, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import LogoImage from '../images/logo.svg'

const NavHeight = '60px'

const NavContainer = styled(Navbar)`
  height: ${NavHeight};
`
const LogoImageTemplete = styled.img`
  display: block;
  width: 60px;
`
const MenuContainer = styled(Container)`
  height: ${NavHeight};
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`
const Logo = styled(Link)`
  flex-shrink: 0;
  margin-right: 16px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.05em;
`
const Menu = styled(Link)`
  position: relative;
  flex-shrink: 0;
  margin-right: 12px;
  font-size: 13px;
  letter-spacing: -0.01em;
`
const PointDot = styled.div`
  position: absolute;
  top: -1px;
  right: -5px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #6c5ce7;
`

const Navigation = () => {
  let navigate = useNavigate()

  return (
    <NavContainer bg="light" variant="light">
      <h1 className="visually-hidden" aria-hidden>
        빵빵마켓
      </h1>

      <MenuContainer>
        <Logo to={'/'}>
          <LogoImageTemplete src={LogoImage} />
        </Logo>
        <Menu to={'/about'}>About</Menu>
        {/* <Menu to={'/best'}>베스트</Menu> */}
        <Menu to={'/product'}>둘러보기</Menu>
        <Menu to={'/chat'}>수다방</Menu>
        <Menu to={'/event'}>
          이벤트
          <PointDot />
        </Menu>
        <Menu to={'/cart'}>
          <FontAwesomeIcon icon={faCartShopping} />
        </Menu>
        <Menu to={'/favorite'}>
          <FontAwesomeIcon icon={faHeart} />
        </Menu>
      </MenuContainer>
    </NavContainer>
  )
}

export default Navigation
