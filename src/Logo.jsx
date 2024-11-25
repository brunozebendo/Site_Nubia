import { Paper } from "@mui/material"
import Logo from "./assets/imagens/Nubiaempe.jpeg"

export function Logotipo () {
    return (
        <Paper id="home" elevation={16} sx={{p: 2, mt: 2 }}>
        <img src={Logo} alt="Logo" />
        </Paper>
    )
}