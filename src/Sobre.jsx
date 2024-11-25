import { Grid2, Typography } from "@mui/material";
import './App.css'



export function Sobre () {
    return (
        <div id="sobre">
        <Grid2  variant="soft" sx={{mt: 1}} size={{xs:6, md: 4 }}><Typography fontSize={"30px"} fontWeight="light" color="secondary"  textAlign={"right"} sx={{ mr: 2}}>
        "Formada em estética há mais de 15 anos com especialização internacional em micropigmentação de sobrancelhas
        e lábios , empresária, trabalhando no meu espaço há mais de 10 anos, ministrando cursos e realizando sonhos, ajudando centenas de mulheres a melhorarem  sua auto estima..."
       </Typography>            
       </Grid2>
       </div>
    )
}