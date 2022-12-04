export const checkEmptyString = (str) => {
  if (str === undefined || str === null) {
    return false
  }
  return true
}

export const getFontColor = (color) => {
  switch (color) {
    case 'purple':
      return '#6c5ce7'
      break

    case 'gray':
      return '#b2b3b9'
      break

    default:
      break
  }
}
