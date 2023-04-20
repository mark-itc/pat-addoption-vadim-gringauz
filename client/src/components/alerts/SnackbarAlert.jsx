import React from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import useAlert from '../../hooks/useAlert'

const Alert = React.forwardRef(function Alert (props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
  })

function SnackbarAlert() {

  const { openSnackBarAlert, alertMessage, hideAlert } = useAlert()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    hideAlert()
  }

  return (
    <Snackbar open={openSnackBarAlert} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
      {alertMessage}
    </Alert>
  </Snackbar>
  )
}

export default SnackbarAlert