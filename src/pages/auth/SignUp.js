import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Image } from 'antd';
import logo from "../../images/logo.png";
import logement from "../../images/Logement2.jpg";



const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${logement})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar shape="square" size={150} src={<Image src={logo} style={{ width: 150, height:120 }} />} />    
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Prénom"
                name="name"
                variant="standard" 
                autoFocus
              />
            <TextField
                margin="normal"
                required
                fullWidth
                id="lname"
                label="Nom"
                name="lname"
                variant="standard" 
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                variant="standard" 
                autoComplete="email"
                autoFocus
              />
                <TextField
                margin="normal"
                required
                fullWidth
                name="tel"
                label="Téléphone"
                id="tel"
                variant="standard" 
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                variant="standard" 
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirmer votre mot de passe"
                type="password"
                id="password"
                variant="standard" 
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                S'inscrire
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Déjà inscrit? Connectez-vous"}
                  </Link>
                </Grid>
              </Grid>
            
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}