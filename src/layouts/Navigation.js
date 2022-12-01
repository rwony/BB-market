import { Navbar, Container } from 'react-bootstrap'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import LogoImage from '../images/logo.svg'

const NavHeight = '60px'
const purple = '#6c5ce7'

const NavContainer = styled(Navbar)`
  position: sticky;
  top: 0;
  width: 100%;
  height: ${NavHeight};
  z-index: 400;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
  background-color: #fff !important;
`
const LogoImageTemplete = styled.img`
  display: block;
  width: 60px;
`
const MenuContainer = styled(Container)`
  height: ${NavHeight};
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none !important;
  }
`
const Logo = styled(Link)`
  flex-shrink: 0;
  margin-right: 16px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.05em;
`
const Menu = styled(NavLink)`
  position: relative;
  flex-shrink: 0;
  margin-right: 12px;
  font-size: 13px;
  letter-spacing: -0.01em;

  &:hover {
    color: ${purple};
    transition: color 0.2s ease-in-out;
  }

  &.active {
    font-weight: 700;

    &:nth-last-child(2),
    &:last-child {
      color: ${purple};
    }

    &:not(:last-child):not(:nth-last-child(2))::after {
      content: '';
      position: absolute;
      bottom: -1px;
      right: 0;
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${purple};
    }
  }
`
const PointDot = styled.div`
  position: absolute;
  top: -1px;
  right: -5px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${purple};
`

const Navigation = () => {
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
