import React, { useEffect, useState } from 'react';
import { CardGroup,Card,Col,Row } from 'react-bootstrap';
import axios from 'axios';
import image from "../../images/image.jpeg";
import { Link } from 'react-router-dom';
import style from '../../Cards.module.css';

export function CardsLayout() {
    const [annonces, setAnnonces] = useState([]);
    const [filtred, setFiltred] = useState([]);
    const [wifi, setWifi] = useState(false);
    const [chauffage, setChauffage] = useState(false);
    const [refrigerateur, setRefrigerateur] = useState(false);
    const [machine, setMachine] = useState(false);
    const [meuble, setMeuble] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/annonce/get").then((res) => {
            setAnnonces(res.data);
            setFiltred(res.data);
        });
    }, [])
    
    const handleSearch = (e) => {
    
        let word = e.target.value;
    
        if(word === "All"){
            setAnnonces(filtred);
            document.getElementById('ville').value = "1";
            document.getElementById('type').value = "1";
            document.getElementById('filles').checked = false;
            document.getElementById('garcons').checked = false;
            document.getElementById('surface').value = "1";
            document.getElementById('prix').value = "1";
            document.getElementById('chambres').value = "1";
            setWifi(false);
            setChauffage(false);
            setRefrigerateur(false);
            setMachine(false);
            setMeuble(false);
            


            
        } 
        if(word === "Wifi"){
            setWifi(true);
            setAnnonces(annonces.filter(item => item.wifi === true));
        }
        if(word === "Chauffage"){
            setChauffage(true);
            setAnnonces(annonces.filter(item => item.chauffage === true));
        }if(word === "Refrigerateur"){
            setRefrigerateur(true);
            setAnnonces(annonces.filter(item => item.refrigerateur === true));
        }
        if(word === "Machine à laver"){
            setMachine(true);
            setAnnonces(annonces.filter(item => item.machineALaver === true));
        }
        if(word === "Meublé"){
            setMeuble(true);
            setAnnonces(annonces.filter(item => item.meuble === true));
        }
    }

        const handleResearch = (e) => {

        let word = e.target.id;
        if( word == "ville"){
            setAnnonces(annonces.filter(item => item.ville === e.target.value));
        }
        if( word == "type" ){
            setAnnonces(annonces.filter(item => item.type === e.target.value));
        }
        if( word == "filles" ){
            setAnnonces(annonces.filter(item => item.preference === "Filles"));
        }
        if( word == "garcons" ){
            setAnnonces(annonces.filter(item => item.preference === "Garcons"));
        }
        if( word == "surface"){
            setAnnonces(annonces.filter(item => item.surface == e.target.value));
        }

        if( word =="prix"){
            if(e.target.value == 2){
                setAnnonces(annonces.filter(item => item.prix <1000 ));
            }
            if(e.target.value == 3){
                setAnnonces(annonces.filter(item => item.prix >= 1000 &&  item.prix < 2000));
            }
            if(e.target.value == 4){
                setAnnonces(annonces.filter(item => item.prix >= 2000 &&  item.prix < 3000));
            }
            if(e.target.value == 5){
                setAnnonces(annonces.filter(item => item.prix >= 3000 &&  item.prix <= 4000));
            }
        }

        if( word =="chambres"){
                setAnnonces(annonces.filter(item => item.chambres == e.target.value));
        }

    }

        return (
            <div>
                <Card className="bg-light text-dark box" >
                    <Card.Body >
                    <div className={style.filter}>
                        <button className={wifi? style.filterbtnactive: style.filterbtn} value="Wifi" onClick={handleSearch}>Wifi</button>
                        <button className={chauffage? style.filterbtnactive: style.filterbtn} value="Chauffage" onClick={handleSearch}>Chauffage</button>
                        <button className={refrigerateur? style.filterbtnactive: style.filterbtn} value="Refrigerateur" onClick={handleSearch}>Refrigirateur</button>
                        <button className={machine? style.filterbtnactive: style.filterbtn} value="Machine à laver" onClick={handleSearch}>Machine à laver</button>
                        <button className={meuble? style.filterbtnactive: style.filterbtn} value="Meublé" onClick={handleSearch}>Meublé</button>
                        <button className={style.filterButton} value="All" onClick={handleSearch}>Actualiser</button>
                        </div>
                        <div className={style.select}>
                            <select id="type" placeholder="Choisissez un type ..." onChange={handleResearch}>
                                <option value="1" >Choisissez un type ...</option>
                                <option>Appartement</option>
                                <option>Studio</option>
                                <option>Garçonnière</option>
                            </select>
                            <select id="ville" placeholder="Choisissez une ville ..." onChange={handleResearch}>
                                <option value="1" >Choisissez une ville ...</option>
                                <option>Agadir</option>
                                <option>Tetouan</option>
                                <option>Casablance</option>
                                <option>Rabat</option>
                                <option>Tanger</option>
                                <option>Fes</option>
                                <option>Meknes</option>
                                <option>Kenitra</option>
                                <option>Marrakech</option>
                                <option>Essaouira</option>
                                <option>Taza</option>
                                <option>Sale</option>
                                <option>Laayoune</option>
                                <option>Khemisset</option>
                                <option>El jadida</option>
                                <option>Bouznika</option>
                                <option>Martil</option>
                                <option>Mdiq</option>
                                <option>Fnideq</option>
                                <option>Chefchaouen</option>
                            </select>
                            <select id="surface"  placeholder="Choisissez une superficie ..." onChange={handleResearch}>
                                <option value="1">Choisissez une superficie (m2)...</option>
                                <option>50</option>
                                <option>60</option>
                                <option>70</option>
                                <option>80</option>
                                <option>90</option>
                                <option>100</option>
                            </select> 
                        </div>
                        <div className={style.radios}>
                             <select id="prix"  placeholder="Choisissez un prix ..." onChange={handleResearch}>
                                <option value="1">Choisissez un prix ...</option>
                                <option value="2">Moin de 1000 Dhs</option>
                                <option value="3">Entre 1000 et 2000 Dhs</option>
                                <option value="4">Entre 1000 et 2000 Dhs</option>
                                <option value="5">Entre 2000 et 3000 Dhs</option>
                            </select> 
                            <select id="chambres"  placeholder="Choisissez le nombre de chambres ..." onChange={handleResearch}>
                                <option value="1">Choisissez le nombre de chambres ...</option>
                                <option value="2">1</option>
                                <option value="3">2</option>
                                <option value="4">3</option>
                                <option value="5">4</option>
                            </select> 
                            <div>
                            <div class="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="filles" onChange={handleResearch}/>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                    &nbsp;Filles
                                    </label>
                            </div>
                            <div class="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="garcons" onChange={handleResearch}/>
                                    <label className="form-check-label" for="flexRadioDefault2">
                                    &nbsp;Garçons
                                    </label>
                            </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Row xs={1} md={3} className="g-4">
                {annonces.map((annonce) => (
                    <Col key = {annonce.id}>
                    <Card>
                        <Card.Img variant="top" 
                        src={"data:image/jpeg;base64,"+annonce.images[0].image+""} 
                        width="160px"
                        height="366px" />
                        <Card.Body>
                        <Card.Title>{annonce.titre}</Card.Title>
                        <Card.Text>
                            {annonce.description}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Link  to={"/annonce/"+annonce.id} className="nav-link" style={{marginLeft:"25%"}}> Consulter l'annonce</Link>
                        </Card.Footer>
                    </Card>
                    </Col>
                ))}
                </Row>
            </div>
        )
    }


export default CardsLayout