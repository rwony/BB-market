export const checkEmptyString = (str) => {
  if (str === undefined || str === null) {
    return false
  }
  return true
}

export const getFontColor = (color) => {
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
    case 'purple':
      return '#6c5ce7'
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

    default:
      break
  }
}
