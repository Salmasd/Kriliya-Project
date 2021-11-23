import React, { useEffect, useState } from 'react';
import {  Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CalendarTodayTwoTone from '@material-ui/icons/CalendarTodayTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import ReportCard from '../../components/cards/ReportCard';
import AdminNav from "../../components/nav/AdminNav";
import { gridSpacing } from '../../functions/constant';
import image from "../../images/etudiant.png";
import { getUserCount } from "../../functions/user";
import { getAnnonceCount } from "../../functions/Annonce";
import firebase from 'firebase/compat/app';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";



const Dashboard = () => {

    const theme = useTheme();
    const [annoncecount, setAnnoncecount] = useState([]);
    const [usercount, setUsercount] = useState([]);
  
  let history = useHistory();
  let { user } = useSelector((state) => ({ ...state }));

  const role = localStorage.getItem("role") ;
  const id = localStorage.getItem("id") ;

  if(!id || role ==="utilisateur"){
    history.push('/login');
  } 
   useEffect(() => {
    getAnnonceCount().then((res) => {
        setAnnoncecount(res.data);
    });
  });

  useEffect(() => {
    getUserCount().then((res) => {
        setUsercount(res.data);
    });
  });

    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminNav />
          </div>
          <div className="col" style={{ marginLeft:"1%" }}>
          <img src={image} style={{ width:"100%", height:"360px" }} alt="KriLiya" /> 
              <br/>
              <br/><br/>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} sm={8} xs={12}>
                        <ReportCard
                            primary={usercount}
                            secondary="Utilisateurs"
                            color={theme.palette.warning.main}
                            footerData="Nombre des utilisateurs"
                            iconPrimary={PeopleAltTwoToneIcon}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid>
                    <Grid item lg={4} sm={8} xs={12}>
                        <ReportCard
                            primary={annoncecount}
                            secondary="Annonces"
                            color={theme.palette.success.main}
                            footerData="Nombre des annonces"
                            iconPrimary={CalendarTodayTwoTone}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid>
                    <Grid item lg={4} sm={8} xs={12}>
                        <ReportCard
                            primary={20}
                            secondary="Visites"
                            color={theme.palette.primary.main}
                            footerData="Nombre des visites"
                            iconPrimary={VisibilityTwoToneIcon}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
        </div>
        </div>
        </div>
    );
};

export default Dashboard;