import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { getFontColor } from '../util/common'

const CardDiv = styled(Col)`
  width: 120px;
  height: auto;
  margin-bottom: 50px;
`
const CardImageDiv = styled.div`
  margin-bottom: 4px;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`
const CardImage = styled.img`
  display: block;
  width: 100%;
`
const CardTitle = styled.h4`
  display: -webkit-box;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.05em;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const CardDesc = styled.p`
  font-size: 13px;
  letter-spacing: -0.05em;
`
const CardDescStrong = styled.strong`
  color: ${getFontColor('dark')};
  font-size: 15px;
  margin-right: 1px;
`

const Card = (props) => {
  const item = props.data

  return (
    <CardDiv sm={4} key={item.id}>
      <CardImageDiv>
        <Link to={`/detail/${item.id}`}>
          <CardImage src={item.thumbnail} alt={`${item.title} 이미지`} />
        </Link>
      </CardImageDiv>

      <Link to={`/detail/${item.id}`}>
        <CardTitle>{item.title}</CardTitle>
      </Link>
      <CardDesc>
        <CardDescStrong>
          {item.price === 0 ? null : item.price.toLocaleString()}
        </CardDescStrong>
        원
      </CardDesc>
    </CardDiv>
  )
}

export default Card
