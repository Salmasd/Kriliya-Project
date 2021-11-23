import React, { useState, useEffect }  from 'react';
import axios from "axios";
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
import { toast } from "react-toastify";
import logo from "../../images/logo.png";
import logement from "../../images/Logement.jpg";
import { auth } from "../../firebase";



const theme = createTheme();

export default function SignInSide({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    let intended = history.location.state;
    if (intended) {
      return;
    } else {
      if (user && user.token) history.push("/");
    }
  }, [user, history]);

  let dispatch = useDispatch();
  const roleBasedRedirect = (res) => {
    // check if intended
    let intended = history.location.state;
    if (intended) {
      history.push(intended.from);
    } else {
      if (res.data.role === "admin") {
        history.push("/admin/dashboard");
      } else {
        history.push("/user/mesannonces");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      console.log(result);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      console.log(idTokenResult.token);
      console.log(user.email);
       axios.get("http://localhost:8080/users/getuser/"+user.email) 
        .then((res) => {
          console.log("hey",res.data);
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
         roleBasedRedirect(res);
        })
        .catch((err) => console.log(err));
 
     // history.push("/");
    }catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };



 /*  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }; */

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
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
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
                id="email"
                label="Entrer votre e-mail"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            <br/><br/>
              <Button
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Se connecter
              </Button>
        
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Pas encore inscrit? Inscrivez-vous"}
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