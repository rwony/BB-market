import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const item = props.data
  return (
    <Col
      sm
      className={['product-image', `product-image-${item.id}`].join(' ')}
      key={item.id}
    >
      <Link to={'/detail'}>
        <img src={item.url} alt={item.title} />
      </Link>
      <Link to={'/detail'}>
        <h4>{item.title}</h4>
      </Link>
      <p>{item.content}</p>
      <strong>{item.price.toLocaleString()}</strong>
    </Col>
  )
}

export default Card
