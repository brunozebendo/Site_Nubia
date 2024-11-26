import { Typography } from "@mui/material";
import './App.css'
import { motion } from 'framer-motion';




export function Sobre () {

    return (        
<motion.div id="sobre"
      initial={{ x: '100%'}}
      animate={{x: 0 }}
      transition={{duration: 3, bounce: 0, type: "spring"}}
    >
        <Typography fontWeight="light" color="secondary"  textAlign={"right"} sx={{ fontSize: {md: "200%", xs: "100%", sm: "90%"}, mt: 1, mr: 1, }}>
        "Formada em estética há mais de 15 anos com especialização internacional em micropigmentação de sobrancelhas
        e lábios , empresária, trabalhando no meu espaço há mais de 10 anos, ministrando cursos e realizando sonhos, ajudando centenas de mulheres a melhorarem  sua auto estima..."
       </Typography>
       </motion.div>    
    
    )
}