import { Card, CardContent, CardHeader, CardMedia, Paper, Typography, Grid } from "@mui/material";
import SobrancelhaLucrativa from './assets/imagens/SobrancelhaLucrativa.jpeg'
import RealisticEyebrowns from './assets/imagens/RealisticEyebrowns.jpeg';
import ColoredLips from './assets/imagens/ColoredLips.jpeg'

export default function Cursos() {
  return (
    <Paper elevation={5} sx={{ p: 1 }} id="cursos">
      <Typography sx={{ color: "white", mt: 2, bgcolor: "rgba(108,6,7,1)", opacity: "80%", fontSize: { md: "200%", xs: "100%", sm: "90%" } }} >CURSOS</Typography>
      <Grid container sx={{ width: "fullwidth", m: 5, flexDirection: { xs: 'column', md: 'row', sm:"row" } }}>
        <Grid item xs={12} md={4} sx={{ m: 1 }}>
          <Card sx={{ height: '100%' }}>
            <CardHeader title='SOBRANCELHAS LUCRATIVAS' titleTypographyProps={{ variant: 'h5' }} />
            <CardMedia component="img" image={SobrancelhaLucrativa} height="140" />
            <CardContent>
              Sobrancelha Lucrativa...
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ m: 1 }}>
          <Card sx={{ height: '100%' }}>
            <CardHeader title='REALISTIC EYEBROWNS' titleTypographyProps={{ variant: 'h5' }} />
            <CardMedia component="img" image={RealisticEyebrowns} height="140" />
            <CardContent>
              REALISTIC EYEBROWNS...
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} sx={{ m: 1 }}>
          <Card sx={{ height: '100%' }}>
            <CardHeader title='COLORED LIPS' titleTypographyProps={{ variant: 'h5' }} />
            <CardMedia component="img" image={ColoredLips} height="140" />
            <CardContent>
              Colored Lips...
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}