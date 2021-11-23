import React, { useEffect, useState } from 'react';
import Card from '../components/cards/Cards';
import big from '../images/logementimage.jpg';
import style from '../Cards.module.css'
import {getMesAnnonce} from '../functions/Annonce'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


export default function Annonce() {

 const { user } = useSelector((state) => ({ ...state }));
const [annonces, setAnnonces] = useState([]);


     
  let history = useHistory();
  const id = localStorage.getItem("id") ;
  const role = localStorage.getItem("role") ;

if(!id || role ==="admin"){
    history.push('/login');
} 

    useEffect(() => {
        
        getMesAnnonce(id).then((response) => {
            setAnnonces(response.data)
        })
        .catch(error => {
            console.log(error);
        }) 
    }, [])
       
    return(
        <div className={style.pattern}>
            <div className={style.filter}>
                <img className={style.BigImage} src={big} alt=""  />
                <div className={style.text}>
                    <p>Gérer vos annonces...</p>
                     <span> Ici vous pouvez consulter les détails de vos annonces, les modifier et les supprimer.</span> 
                </div>    
            </div>
            <div className={style.cardContainer}>
                { annonces.map((annonce) => 
                    <Card key={annonce.id} annonce={annonce} />)
                }
            </div> 
        </div>   
    )
}
