import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Image } from 'antd';
import {toast} from 'react-toastify';
import logo from "../../images/logo.png";
import logement from "../../images/Logement2.jpg";
import {auth} from "../../firebase";
import { useHistory } from "react-router-dom";
import { addUser } from '../../functions/user';



const theme = createTheme();

export default function SignUpSide() {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  let history = useHistory();

  let dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
     // validation
     if (!email || !mdp|| !nom|| !prenom || !telephone) {
      toast.error("Tous les champs sont obligatoires");
      return;
    }

    if (mdp.length < 8) {
      toast.error("Le mot de passe doit contenir au moins 8 caractères !");
      return;
    }
    try{
      const result = await auth.createUserWithEmailAndPassword(email, mdp);
      console.log(result);
      //user id token
      let role = "utilisateur";
      
      let user = auth.currentUser
      const idTokenResult= await user.getIdTokenResult()
      let data= {email,mdp,prenom,nom,role,telephone};
      console.log(data);
        addUser(data).then(res =>{
          console.log(res.data);
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.nom,
              lname: res.data.prenom,
              email: user.email,
              token: idTokenResult.token,
              role: res.data.role,
              id: res.data.id,
            },
        });
      });
        history.push("/");


      //setup redux

      console.log(user, idTokenResult);
      //redirect
      history.push("/")

    }catch (error){
      console.log(error);
      toast.error(error.message);

    }
   /*  const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      nom:data.get('lname'),
      prenom: data.get('name'),
      telephone:data.get('tel'),
      email: data.get('email'),
      mdp: data.get('password'),
    }); */
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
                value={nom}
                onChange={(e) => setNom(e.target.value)}
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
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
               
                
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
                value={mdp}
                onChange={(e) => setMdp(e.target.value)}
                
              />
        
              <Button
                onClick={handleSubmit}
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