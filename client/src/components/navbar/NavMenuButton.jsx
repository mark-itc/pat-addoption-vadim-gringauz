// import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { orange } from '@mui/material/colors'


const NavMenuButton = styled(Button)`
  && {
    height: 100%;
    color: white;
    display: block;
    text-shadow: 1px 1px 1px black;
    position: relative;
  }

  &&:hover {
    background-color: ${orange['A700']};
  }
`

export default NavMenuButton

