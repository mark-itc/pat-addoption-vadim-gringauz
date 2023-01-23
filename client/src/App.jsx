import React from 'react'
import { useState } from 'react'
import GoogleFontLoader from 'react-google-font'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Container } from '@mui/material'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import PrivateRoute from './helpers/PrivateRoute'
import { blueGrey, orange } from '@mui/material/colors'
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
  },
})

function App() {
  const [openDiv, setOpenDiv] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GoogleFontLoader
        fonts={[
          {
            font: 'Sono',
            weights: [200, 300, 400, 500, 600, 700, 800],
          },
          {
            font: 'Rubik Marker Hatch',
            weights: [400],
          },
        ]}
      />
      <Navbar />
      <PrivateRoute />
      <Container>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis, omnis fugit eius velit libero aperiam corporis a saepe unde maxime
          quae laudantium nobis consequatur, magnam sunt ab quod explicabo.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis, omnis fugit eius velit libero aperiam corporis a saepe unde maxime
          quae laudantium nobis consequatur, magnam sunt ab quod explicabo.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis, omnis fugit eius velit libero aperiam corporis a saepe unde maxime
          quae laudantium nobis consequatur, magnam sunt ab quod explicabo.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis, omnis fugit eius velit libero aperiam corporis a saepe unde maxime
          quae laudantium nobis consequatur, magnam sunt ab quod explicabo.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis, omnis fugit eius velit libero aperiam corporis a saepe unde maxime
          quae laudantium nobis consequatur, magnam sunt ab quod explicabo.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis, omnis fugit eius velit libero aperiam corporis a saepe unde maxime
          quae laudantium nobis consequatur, magnam sunt ab quod explicabo.</div>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
