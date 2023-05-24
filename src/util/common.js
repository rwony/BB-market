export const checkEmptyString = (str) => {
  if (str === undefined || str === null) {
    return false
  }
  return true
}

export const getColor = (color) => {
  switch (color) {
    case 'white':
      return '#fff'
      break
    case 'black':
      return '#000'
      break
    case 'dark':
      return '#191a20'
      break
    case 'primary':
      return '#3f4150'
      break
    case 'secondary':
      return '#8c8d96'
      break
    case 'tertiary':
      return '#b2b3b9'
      break
    case 'purple':
      return '#6c5ce7'
      break
    case 'blue':
      return '#1a6dff'
      break
    case 'yellow':
      return '#ffc100'
      break
    case 'border':
      return '#e0e2e7'
      break
    case 'gray':
      return '#b2b3b9'
      break
    case 'background':
      return '#f7f8fa'
      break
    case 'background-dark':
      return '#2f3438'
      break
    case 'orange-red':
      return '#FF4500'
      break
    case 'red':
      return '#B22222'
      break
    case 'orange':
      return '#FF8C00'
      break

    default:
      break
  }
}

export const colorConditions = {
  discount: (props) =>
    props.discount && { color: getColor('yellow'), fontWeight: 'bold' },
  featured: (props) =>
    props.featured && { color: getColor('blue'), fontWeight: 'normal' },
  highlighted: (props) =>
    props.highlighted && { color: getColor('yellow'), fontWeight: 'bold' },
  error: (props) =>
    props.error && { color: getColor('red'), fontWeight: 'bold' },
  disabled: (props) =>
    props.disabled && { color: getColor('gray'), fontWeight: 'normal' },
}
