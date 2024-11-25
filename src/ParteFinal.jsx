import { Paper, Typography } from "@mui/material"
import ImagemFinal from "./assets/imagens/fotofinaldapagina.jpeg"

export default function ParteFinal() {
    return(    
    <>
    <Paper elevation={5} width="100vh" sx={{ p: 1, m:1}} id="cursos">
        <Typography sx={{color: "white", mt: 2, bgcolor: "rgba(108,6,7,1)", opacity: "80%"}} variant="h2">VENHA VIVER ESSA EXPERIÊNCIA</Typography>
        <img src={ImagemFinal} alt="mulher tirando foto de outra" />
    </Paper>
    <Typography variant="h4"> Av. Júlio Antônio Thurler, 46 - sala 103 - Olaria, Nova Friburgo - RJ</Typography>
    </>
    )
}