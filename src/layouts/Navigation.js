import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Link className="logo" to={'/'}>
          빵빵마켓
        </Link>
        <Link to={'/about'}>About us</Link>
        <Link to={'/best'}>베스트</Link>
        <Link to={'/product'}>둘러보기</Link>
        <Link to={'/chat'}>수다방</Link>
        <Link to={'/event'}>이벤트</Link>
        <Link to={'/cart'}>장바구니</Link>
      </Container>
    </Navbar>
  )
}

export default Navigation
