import './App.css'
import { Container } from "@mui/material"
import { Header } from './Header'
import { Logotipo } from './Logo'
import { Sobre } from './Sobre'
import Cursos from './Cursos'
import Procedimentos from './Procedimentos'
import ParteFinal from './ParteFinal'
import Zap from './Zap'
import LogoImage from './Logo2'

function App() {

  return (
    <>    
    <Container  sx={{                
                bgcolor: "primary.main",
                textAlign: "center",
                fontFamily: "montserrat-nubia",
                padding: "1rem",                
            }}>            
      <Header/>
      <Zap />
      <LogoImage />
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
