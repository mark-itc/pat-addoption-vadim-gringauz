import React from 'react'
import { Outlet } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import { blueGrey, orange } from '@mui/material/colors'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import appLogo from './assets/logo.png'
export { appLogo }

const theme = createTheme({
  palette: {
    // mode: 'dark',
    primary: blueGrey,
    secondary: {
      main: orange['A700']
    }
  },
  typography: {
    fontFamily: 'Sono',
    fontSize: 25
  }
})

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GoogleFontLoader
        fonts={[
          {
            font: 'Sono',
            weights: [200, 300, 400, 500, 600, 700, 800]
          },
          {
            font: 'Rubik Marker Hatch',
            weights: [400]
          }
        ]}
      />
      <Box
        sx={{
          // minHeight: '100vh',
          minHeight: '100dvh',
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto'
        }}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </Box>
      {/* <Grid
        container
        spacing={0}
        sx={{
          minHeight: '100vh',
          minHeight: '100dvh'
        }}
      >
        <Grid item>
        </Grid>
        <Grid item>
        </Grid>
      </Grid> */}
    </ThemeProvider>
  )
}

export default App
