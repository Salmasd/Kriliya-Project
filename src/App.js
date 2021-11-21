import React from "react";
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

const App = () => {


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