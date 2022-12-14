import { Navbar, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { getFontColor } from '../util/common'
import LogoImage from '../images/logo.svg'

const NavHeight = '60px'

const NavContainer = styled(Navbar)`
  position: sticky;
  top: 0;
  width: 100%;
  height: ${NavHeight};
  z-index: 50;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
  background-color: ${getFontColor('white')} !important;
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

  &.active {
    color: ${getFontColor('primary')};
    font-weight: 700;

    &:nth-last-child(2),
    &:last-child {
      color: ${getFontColor('yellow')};
    }

    &:not(:last-child):not(:nth-last-child(2))::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${getFontColor('yellow')};
    }
  }
`
const dotFade = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 0.7;
    transform: scale(2.5);
  }
`
const PointDot = styled.div`
  position: absolute;
  top: -1px;
  right: -5px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${getFontColor('yellow')};
`
const PointDotBackground = styled.div`
  position: absolute;
  top: -1px;
  right: -5px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${getFontColor('yellow')};
  animation: ${dotFade} 1s infinite linear alternate;
`

const Navigation = () => {
  return (
    <NavContainer bg="light" variant="light">
      <h1 className="visually-hidden" aria-hidden>
        ????????????
      </h1>

      <MenuContainer>
        <Logo to={'/'}>
          <LogoImageTemplete src={LogoImage} alt="????????????" />
        </Logo>
        <Menu to={'/about'}>About</Menu>
        <Menu to={'/best'}>BEST</Menu>
        <Menu to={'/chat'}>?????????</Menu>
        <Menu to={'/event'}>
          ?????????
          <PointDot />
          <PointDotBackground />
        </Menu>
        <Menu to={'/cart'}>
          <FontAwesomeIcon icon={faCartShopping} aria-label="????????????" />
        </Menu>
        <Menu to={'/favorite'}>
          <FontAwesomeIcon icon={faHeart} aria-label="??? ??????" />
        </Menu>
      </MenuContainer>
    </NavContainer>
  )
}

export default Navigation
