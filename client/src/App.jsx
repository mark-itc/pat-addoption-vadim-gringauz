import React from 'react'
import { Outlet } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import generalTheme from './config/generalTheme'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import appLogo from './assets/logo.png'
export { appLogo }

function App() {
  return (
    <ThemeProvider theme={generalTheme}>
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
            gridAutoColumns: '100%',
            gridTemplateRows: 'auto 1fr auto'
          }}
        >
          <Navbar />
          <Outlet />
          <Footer />
        </Box>
    </ThemeProvider>
  )
}

export default App
