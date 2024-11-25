import { Paper } from "@mui/material";
import Logo from "./assets/imagens/LOGO.jpg"

export default function LogoImage() {
    return (
        <Paper elevation={3} sx={{mt: 2, mb: 0,  bgcolor: "rgba(108,6,7,1)"}}>
            <img src={Logo} alt="Logotipo>" />
        </Paper>
    );
};