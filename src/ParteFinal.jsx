import { Paper, Typography } from "@mui/material"
import ImagemFinal from "./assets/imagens/fotofinaldapagina.jpeg"

export default function ParteFinal() {
    return(    
    <div>
    <Paper elevation={5} width="100vh" sx={{ p: 1, m:1, display: "flow"}} id="cursos">
        <Typography sx={{fontSize: {md: "200%", xs: "80%"}, color: "white", mt: 2, bgcolor: "rgba(108,6,7,1)", opacity: "80%"}}>VENHA VIVER ESSA EXPERIÊNCIA</Typography>
        <img src={ImagemFinal} alt="mulher tirando foto de outra" />
    
    <Typography color="white" id="contatos" sx={{ bgcolor: '#6C0607', opacity: "90%", fontSize: {md: "200%", xs: "50%"}}}> Av. Júlio Antônio Thurler, 46 - sala 103 - Olaria, Nova Friburgo - RJ <br/> 22 988099371</Typography>
    </Paper>
    </div>
    )
}