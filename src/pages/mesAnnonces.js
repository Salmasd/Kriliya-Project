import React, { useEffect, useState } from 'react';
import Card from '../components/cards/Cards';
import big from '../images/logementimage.jpg';
import style from '../Cards.module.css'
import {getMesAnnonce} from '../functions/Annonce'



export default function Annonce() {

   const [annonces, setAnnonces] = useState([]);
    useEffect(() => {
         
        getMesAnnonce().then((response) => {
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
