import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Paper, Typography } from '@mui/material';

const itemData = [
    {
        img: "src/assets/imagens/ImagensLista/Nuncia.jpeg",
        title: "Mulher com design de sobrancelha",
    },
    {
        img: "src/assets/imagens/ImagensLista/Boca.jpeg",
        title: "Mulher com design de sobrancelha",
    },
    {
        img: "src/assets/imagens/ImagensLista/SobrancelhaeBoca.jpeg",
        title: "Mulher com design de sobrancelha",
    }, 
    {
        img: "src/assets/imagens/ImagensLista/BocadeFrente.jpeg",
        title: "Mulher com design de sobrancelha",
    },
    {
        img: "src/assets/imagens/ImagensLista/Desconhecida.jpeg",
        title: "Mulher com design de sobrancelha",
    },
    {
        img: "src/assets/imagens/ImagensLista/Duda.jpeg",
        title: "Mulher com design de sobrancelha",
    },
    {
        img: "src/assets/imagens/ImagensLista/Juliana.jpeg",
        title: "Mulher com design de sobrancelha",
    },
    {
        img: "src/assets/imagens/ImagensLista/Juliana2.jpeg",
        title: "Mulher com design de sobrancelha",
    },
    {
        img: "src/assets/imagens/ImagensLista/MicroFocada.jpeg",
        title: "Mulher com design de sobrancelha",
    },
    {
        img: "src/assets/imagens/ImagensLista/reverso.jpeg",
        title: "Mulher com design de sobrancelha",
    },      
    {
        img: "src/assets/imagens/ImagensLista/espelho.jpeg",
        title: "Mulher com design de sobrancelha",
    },
    {
        img: "src/assets/imagens/ImagensLista/Juju.jpeg",
        title: "Mulher com design de sobrancelha",
    },
]

export default function Procedimentos() {
    return (
        <Paper id="procedimentos" elevation={5} sx={{p: 1, mt: 2}}>
        <Typography sx={{color: "white", mt: 2, bgcolor: "rgba(108,6,7,1)", opacity: "80%"}} variant="h2">PROCEDIMENTOS</Typography>
        <ImageList sx={{ width: "fulwidth", height: 450 }} variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Paper>
    );
}