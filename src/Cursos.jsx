import { Card, CardContent, CardHeader, CardMedia, Paper, Typography, Grid } from "@mui/material";
import SobrancelhaLucrativa from './assets/imagens/SobrancelhaLucrativa.jpeg'
import RealisticEyebrowns from './assets/imagens/RealisticEyebrowns.jpeg';
import ColoredLips from './assets/imagens/ColoredLips.jpeg'
import Mentoria from './assets/imagens/mentoria.jpeg'

export default function Cursos() {
  return (
    <Paper elevation={5} sx={{ p: 1 }} id="cursos">
      <Typography sx={{ color: "white", mt: 2, bgcolor: "rgba(108,6,7,1)", opacity: "80%", fontSize: { md: "200%", xs: "100%", sm: "90%" } }} >CURSOS</Typography>
      <Grid container sx={{ width: "fullwidth", m: 5, flexDirection: { xs: 'column', md: 'row', sm:"row", lg: "row" } }}>
        <Grid item xs={12} md={4} sx={{ m: 1 }}>
          <Card sx={{ height: 'auto', display: 'flex', flexDirection: 'column' }}>
            <CardHeader title='SOBRANCELHAS LUCRATIVAS' titleTypographyProps={{ variant: 'h5' }} />
            <CardMedia component="img" image={SobrancelhaLucrativa} height={140} />
            <CardContent sx={{ color: "black", fontFamily: "Verdana", fontSize: "1,5rem" }}>
             Muito mais que técnica, aprenda a estruturar o seu negócio
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ m: 1 }}>
          <Card sx={{ height: '100%' }}>
            <CardHeader title='REALISTIC EYEBROWNS' titleTypographyProps={{ variant: 'h5' }} />
            <CardMedia component="img" image={RealisticEyebrowns} sx={{maxWidth: 300, m: 1}} />
            <CardContent sx={{ color: "black", fontFamily: "Verdana", fontSize: "1,5rem" }}>
              Técnica exclusiva de micro pigmentação indicada para todos os tipos de pele
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ m: 1 }}>
          <Card sx={{ height: '100%' }}>
            <CardHeader title='COLORED LIPS' titleTypographyProps={{ variant: 'h5' }} />
            <CardMedia component="img" image={ColoredLips} height="140" />
            <CardContent sx={{ color: "black", fontFamily: "Verdana", fontSize: "1,5rem" }}>
              Deixe sua clientes com os lábios que sempre sonharam
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ m: 1 }}>
          <Card sx={{ height: '100%' }}>
            <CardHeader title=' MENTORIA' titleTypographyProps={{ variant: 'h5' }} />
            <CardMedia component="img" image={Mentoria} height="140" />
            <CardContent sx={{ color: "black", fontFamily: "Verdana", fontSize: "1,5rem" }}>
              Nossa mentoria on-line para ajudar o seu negócio no ramo das sobrancelhas
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}