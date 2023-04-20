import React from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert (props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
  })

function SnackbarAlert() {
  return (
    <div>SnackbarAlert</div>
  )
}

export default SnackbarAlert