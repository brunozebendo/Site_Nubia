import { Paper } from "@mui/material"
import Logo from "./assets/imagens/Nubiaempe.jpeg"

export function Logotipo () {
    return (
        <Paper id="home" elevation={16}
         sx={{m: 5, p:5, display: "flex", alignItems: 'center'}}>
        <img src={Logo} alt="Logo"/>
        </Paper>
    )
}