import { createTheme } from '@mui/material/styles'
import { blueGrey, orange } from '@mui/material/colors'
import darkMode from '../helpers/darkMode'

const generalTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark': undefined,
      primary: blueGrey,
      secondary: {
        main: orange['A700']
      }
    },
    typography: {
      fontFamily: 'Sono',
      fontSize: 25,
      h1: {
        fontSize: '4em',
        fontWeight: 'bold',
        fontVariant: 'all-petite-caps'
      },
      h2: {
        fontSize: '3em',
        fontVariant: 'all-petite-caps'
      },
      h3: {
        fontSize: '2em',
      },
      h4: {
        fontSize: '1.5em',
      },
      body1: {
        fontSize: '1.5em',
      },
    }
  })

  export default generalTheme