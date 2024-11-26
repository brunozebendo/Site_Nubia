import { Button, ButtonGroup } from '@mui/material';
import { motion } from "motion/react"



export function Header() {
    return(
      <motion.div
      initial={{ x: '-100%'}}
      animate={{x: 0 }}
      transition={{duration: 3, bounce: 0, type: "spring"}}>
        <ButtonGroup fullWidth color='secondary' size="large" sx={{position:"sticky", justifyContent:"space-around", bgcolor: (theme) => theme.palette.primary.main}}>        
        <Button component="a" href="#sobre"variant="contained" >SOBRE</Button>
        <Button component="a" href="#cursos"variant="contained">CURSOS</Button>
        <Button component="a" href="#procedimentos"variant="contained">PROCEDIMENTOS</Button>
        <Button component="a" href="#contatos"variant="contained">CONTATOS</Button>
        </ButtonGroup>
      </motion.div>
      );
    }   
