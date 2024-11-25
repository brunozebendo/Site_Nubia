import { Button, ButtonGroup } from '@mui/material';


export function Header() {
    return(    
        <ButtonGroup fullWidth color='secondary' size="large" sx={{position:"sticky", justifyContent:"space-around", bgcolor: (theme) => theme.palette.primary.main}}>
        <Button component="a" href="#home" variant="contained" >HOME</Button>
        <Button component="a" href="#sobre"variant="contained" >SOBRE</Button>
        <Button component="a" href="#cursos"variant="contained">CURSOS</Button>
        <Button component="a" href="#procedimentos"variant="contained">PROCEDIMENTOS</Button>
        <Button component="a" href="#contatos"variant="contained">CONTATOS</Button>
        </ButtonGroup>
      );
    }   
