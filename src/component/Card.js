import { Col } from 'react-bootstrap'

const Card = (props) => {
  const item = props.data
  return (
    <Col
      key={item.id}
      sm
      className={['product-image', `product-image-${item.id}`].join(' ')}
    >
      <img src={item.url} />
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      <strong>{item.price.toLocaleString()}</strong>
    </Col>
  )
}

export default Card
