import { createTheme } from '@mui/material/styles'
import { blueGrey, orange, grey, black } from '@mui/material/colors'
import darkMode from '../helpers/darkMode'

const generalTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark': undefined,
      primary: blueGrey,
      info: darkMode ? grey : grey,
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
      h4: {
        fontSize: '1.2em',
      },
      h5: {
        fontSize: '1.2em',
      },
      h6: {
        fontSize: '0.8em',
      },
      body1: {
        fontSize: '1.2em',
      },
      body2: {
        fontSize: '1em',
        color: 'white',
      },
      caption: {
        fontSize: '1em',
      },
    },
    components: {
      // MuiTextField: {
      //   styleOverrides: {
      //     root: {
      //       fontSize: '0.5rem',
      //     },
      //   },
      // },
    },
  })

  export default generalTheme