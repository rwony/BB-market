import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CardDiv = styled(Col)`
  width: 300px;
  height: auto;
  margin-bottom: 50px;
  text-align: center;
`
const CardImage = styled.img`
  display: block;
  width: 100%;
`
const CardTitle = styled.h4`
  font-size: 16px;
`
const CardDesc = styled.p`
  font-size: 13px;
  color: #b2b3b9;
`
const CardDescStrong = styled.strong`
  font-size: 14px;
  letter-spacing: -0.02em;
`

const Card = (props) => {
  const item = props.data
  return (
    <CardDiv sm key={item.id}>
      <Link to={'/detail'}>
        <CardImage src={item.url} alt={item.title} />
      </Link>
      <Link to={'/detail'}>
        <CardTitle>{item.title}</CardTitle>
      </Link>
      <CardDesc>{item.content}</CardDesc>
      <CardDescStrong>￦ {item.price.toLocaleString()}</CardDescStrong>
    </CardDiv>
  )
}

export default Card
