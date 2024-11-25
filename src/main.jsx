import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider} from "@mui/material/styles"


const theme = createTheme({
  palette: {
    primary: {
      main: '#D0AC88',
      },
    secondary: {
      main: '#6C0607',
      },
    typography: {
      fontFamily: ['montserrat-nubia']
    }
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
