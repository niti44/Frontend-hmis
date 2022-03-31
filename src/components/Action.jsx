import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content:space-around;
`
const Button = styled.button`
  background-color: #4c51bf;
  color: white;
  padding: 5px 20px 5px 20px; 
  border-radius: 15px;
`

const Action = (props) => {
  return (
    <Container>
      {props.values.map((val) => 
      val === 'View'?
      <Button> <Link
          to='/pastVisit'
          style={{ textDecoration: 'none', color: 'white' }}
        >
          {val}
        </Link></Button>
       :<Button>{val}</Button>
      
        
      )}
    </Container>
  )
}

export default Action
