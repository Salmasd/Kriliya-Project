import React, { useState } from 'react';
import style from '../../Cards.module.css';
import Swal from 'sweetalert2';
import {deleteAnnonce} from '../../functions/Annonce';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Moment from 'react-moment';
import { Image } from 'antd';
import { useHistory } from "react-router-dom";

export default function Card({annonce}) {
    let history = useHistory();
    const [visible, setVisible] = useState(false);

    const SupprimerAnnonce = (id) => {
        Swal.fire({
            title: 'Etes vous sûre?',
            text: "Vous ne pouvez pas restaurer les données! !",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#53B3CB',
            cancelButtonColor: '#F15956',
            confirmButtonText: 'OUI',
            cancelButtonText: 'NON'
          }).then((result) => {
            if (result.isConfirmed) {
               deleteAnnonce(id)
              .then((responce) => {
                
              Swal.fire(
                {
                    title: 'Supprimée!',
                    text: 'Votre annonce a été supprimée.',
                    icon: 'success',
                    confirmButtonColor: '#1d314a',
                    confirmButtonText: 'OK',
                })
                history.push("/user/mesannonces");
            })
            }
          })
    } 
    const ModifierAnnonce = (id) => {
        history.push("/user/updateannonce/"+id);
    } 
    const getAnnonce = (id) => {
        history.push("/annonce/"+id);
    }

        return(
            <div className={style.card}>
                 {/* <img className={style.image} src={"data:image/jpeg;base64,"+annonce.images[0].image+""} /> */}
                 <Image className={style.image} preview={{ visible: false }}
                        src={"data:image/jpeg;base64,"+annonce.images[0].image+""}
                         onClick={() => setVisible(true)}
                  />
                  <div style={{ display: 'none' }}>
                 <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                       
                       
                      { 
                        annonce.images.map((image) => 
                            <Image className={style.image} key={image.id} src={"data:image/jpeg;base64,"+image.image+""} />
                        )
                      }
                 </Image.PreviewGroup>
                 </div>
                 <div className={style.info}>
                    <div className={style.head}>
                        <div className={style.title}>{annonce.titre}</div>
                        <div className={style.btns}>
                            <button className={style.btnMore}onClick={ (e) => { getAnnonce(annonce.id) }}><i className="fas fa-info-circle"></i></button>
                            <button className={style.btnUpdate} onClick={ (e) => { ModifierAnnonce(annonce.id) }}><i className="fas fa-edit"></i></button>
                            <button className={style.btnDelete} onClick={(e) => { SupprimerAnnonce(annonce.id) }}><i className="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <div>
                        <div><span className={style.light}>Date de publication : </span><Moment format="YYYY/MM/DD" >{ annonce.date }</Moment></div>
                        <div><span className={style.light}>Prix : </span>{annonce.prix} MAD</div>
                    </div>
                 </div>
            </div>
        )
    }