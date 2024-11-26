import './App.css'
import { Container, useMediaQuery } from "@mui/material"
import { Header } from './Header'
import { Logotipo } from './Logo'
import { Sobre } from './Sobre'
import Cursos from './Cursos'
import Procedimentos from './Procedimentos'
import ParteFinal from './ParteFinal'
import Zap from './Zap'
import LogoImage from './Logo2'
import { Fade } from '@mui/material'
import { useReducer } from 'react'
//xs, sm, md, lg, xl

function App() {
  const isDesktop = useMediaQuery ('(min-width: 768px)');

  return (
    <>    
    <Container  sx={{
                width: {xs: "40%", sm: "100%", md: "100%", lg: "100%",  },
                bgcolor: "primary.main",
                textAlign: "center",
                fontFamily: "montserrat-nubia",
                padding: "1rem",                
            }}>            
      {isDesktop && <Header/>}
      <Zap />
      <Fade >
        <LogoImage />
      </Fade>
      <Logotipo />
      <Sobre />
      <Cursos />
      <Procedimentos />      
      <ParteFinal />
    </Container>    
    </>
  )
}

export default App
