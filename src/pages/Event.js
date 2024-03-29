import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const PageTitle = styled.h1`
  padding: 16px 0;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.01em;
`

const Event = () => {
  return (
    <div>
      <PageTitle>EVENT</PageTitle>
      <Outlet />
    </div>
  )
}

export default Event
