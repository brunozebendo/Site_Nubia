import { Paper } from "@mui/material"
import Logo from "./assets/imagens/Nubiaempe.jpeg"
import {motion} from "motion/react"

export function Logotipo () {
    return (
    <motion.div
      initial={{ x: '-100%'}}
      animate={{x: 0 }}
      transition={{duration: 3, bounce: 0, type: "spring"}}>
        <Paper id="home" elevation={16}
         sx={{m: 5, p:5, display: "flex", alignItems: 'center'}}>
        <img src={Logo} alt="Logo"/>
        </Paper>
    </motion.div>
    )
}