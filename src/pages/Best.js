import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const PageTitle = styled.h1`
  padding: 16px 0;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.01em;
`

const Best = () => {
  return (
    <div>
      <PageTitle>BEST</PageTitle>
      <Outlet />
    </div>
  )
}

export default Best
