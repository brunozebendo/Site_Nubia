import { Card, CardContent, CardHeader, CardMedia, Paper, Typography } from "@mui/material";
import {Grid} from "@mui/material";
import SobrancelhaLucrativa from './assets/imagens/SobrancelhaLucrativa.jpeg'
import RealisticEyebrowns from './assets/imagens/RealisticEyebrowns.jpeg';
import ColoredLips from './assets/imagens/ColoredLips.jpeg'

export default function Cursos() {
    return (
        <Paper elevation={5}  sx={{p: 1}} id="cursos">
        <Typography sx={{color: "white", mt: 2, bgcolor: "rgba(108,6,7,1)", opacity: "80%"}} variant="h2">CURSOS</Typography>
        <Grid container sx={{ width: "fullwidth", m: 5, flexDirection: { xs: 'column', md: 'row' }, alignItems: "stretch" }}>
        <Grid item sx={{m: 1, height: "5rem"}} xs={12} md={3}><Card sx={{maxWidth: 350, 
            "& .MuiCardHeder-title": {
                fontSize: "3rem",
                fontFamily: "sans-serif"
            }
                }} elevation={3}>
            <CardHeader title='SOBRANCELHAS LUCRATIVAS' />
            <CardMedia component="img" image={SobrancelhaLucrativa} />
            <CardContent sx={{fontFamily: "sans-serif", fontSize: "1,5rem"}}>
                Sobrancelhas Lucrativas...
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12} md={3} sx={{m: 1}} >
        <Card sx={{maxwidth: 350,
            "& .MuiCardHeder-title": {
                fontSize: "3rem",
                fontFamily: "sans-serif",
                bgcolor: "#D0AC88"
            }
                }} elevation={3}>
            <CardHeader title='REALISTIC EYEBROWNS' />
            <CardMedia component="img" image={RealisticEyebrowns} />
            <CardContent sx={{fontFamily: "sans-serif", fontSize: "1,5rem"}}>
            REALISTIC EYEBROWNS...
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12} md={3} sx={{m: 1}} >
        <Card sx={{maxwidth: 350,
            "& .MuiCardHeder-title": {
                fontSize: "3rem",
                fontFamily: "sans-serif"
            }
                }} elevation={3}>
            <CardHeader title='COLORED LIPS' />
            <CardMedia component="img" image={ColoredLips} />
            <CardContent sx={{fontFamily: "sans-serif", fontSize: "1,5rem"}}>
                Colored Lips...
            </CardContent>
        </Card>
        </Grid>
        </Grid>
        </Paper>
    );
}