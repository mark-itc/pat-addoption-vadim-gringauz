import React from 'react'
import { Button } from '@mui/material'

function Status () {
  return (
    <>
      <div>You have X adoption requests</div>
      <div>You have Y foster requests</div>
      <Button variant='contained'>View our pets</Button>
    </>
  )
}

export default Status
