import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Announce from "./pages/Annonce";
import SignInSide from "./pages/auth/SignInSide";
import SignUp from "./pages/auth/SignUp";
import UsersList from "./pages/admin/UsersList";
import AnnonceList from "./pages/admin/AnnonceList";
import Dashboard from "./pages/admin/Dashbord";
import NavbarResp from "./components/nav/NavbarResp";
import Footer from "./components/nav/Footer";
import Home from "./pages/Home";
import mesAnnonces from "./pages/mesAnnonces";
import Ajoutannonce from "./components/forms/Ajoutannonce";
import Updateannonce from "./components/forms/Updateannonce";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";


const App = () => {

  const dispatch = useDispatch()

  //firebase check firebase auth state

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user)=>{
      if(user){

        const idTokenResult= await user.getIdTokenResult()

        console.log("user", user);
        axios.get("http://localhost:8080/users/getuser/"+user.email) 
        .then((res) => {
          console.log("hey",res.data);
          localStorage.setItem('id',  res.data.id );
          localStorage.setItem('role',  res.data.role );
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
        })

      }
    });
//clean up 
return () => unsubscribe();
  },[] )




  return (
    <>
      < NavbarResp/>
      <ToastContainer />
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/login" component={SignInSide} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/annonce/:slug"
               render={({ match }) => <Announce match={match} />}/>

        <Route exact path="/admin/allusers" component={UsersList} />
        <Route exact path="/admin/allannonces" component={AnnonceList} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/user/mesannonces" component={mesAnnonces} />
        <Route exact path="/user/addannonce" component={Ajoutannonce} />
        <Route exact path="/user/updateannonce/:slug" 
               render={({ match }) => <Updateannonce match={match} />}/>

      </Switch>
      </BrowserRouter>
      <Footer/>
      

    </>
  );
};

export default App;