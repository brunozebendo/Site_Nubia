import { Paper } from "@mui/material";
import Logo from "./assets/imagens/LOGO.jpg"
import { motion } from "motion/react"

export default function LogoImage() {
    return (
        <motion.div
      initial={{ x: '100%'}}
      animate={{x: 0 }}
      transition={{duration: 3, bounce: 0, type: "spring"}}>
        <Paper elevation={3} sx={{mt: 2, mb: 0,  bgcolor: "rgba(108,6,7,1)"}}>
            <img src={Logo} alt="Logotipo>" />
        </Paper>
        </motion.div>
    );
};