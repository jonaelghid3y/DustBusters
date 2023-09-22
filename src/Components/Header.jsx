import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

function Header() {
  return (
    <Styledheader>
        <Nav/>
    </Styledheader>
  )
}
const Styledheader = styled.header`
  width: 100%;
  height: 15vh;
  border: 1px solid black;
`

export default Header