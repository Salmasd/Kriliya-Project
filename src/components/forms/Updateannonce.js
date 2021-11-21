import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, FloatingLabel } from 'react-bootstrap';
import Swal from 'sweetalert2';
import {getAnnonce, updateAnnonce} from '../../functions/Annonce';
import { useHistory } from "react-router-dom";


export default function Updateannonce({match}) {

let history = useHistory();
let { slug } = match.params;
const [chambres, setChambres] = useState('');
const [chauffage, setChauffage] = useState(false);
const [description, setDescription] = useState('');
const [machineALaver, setMachineALaver] = useState(false);
const [meuble, setMeuble] = useState(false);
const [preference, setPreference] = useState('');
const [prix, setPrix] = useState('');
const [quartier, setQuartier] = useState('');
const [refrigerateur, setRefrigerateur] = useState(false);
const [surface, setSurface] = useState('');
const [titre, setTitre] = useState('');
const [type, setType] = useState('');
const [date, setDate] = useState('');
const [ville, setVille] = useState('');
const [wifi, setWifi] = useState(false);
  
      useEffect(() =>{

          getAnnonce(slug).then((response) => {
            var annonce = response.data;
              setChambres(annonce.chambres);
              setChauffage(annonce.chauffage);
              setDescription(annonce.description);
              setMachineALaver(annonce.machineALaver);
              setMeuble(annonce.meuble);
              setPreference(annonce.preference);
              setPrix(annonce.prix);
              setQuartier(annonce.quartier);
              setRefrigerateur(annonce.refrigerateur);
              setSurface(annonce.surface);
              setTitre(annonce.titre)
              setType(annonce.type)
              setDate(annonce.date)
              setVille(annonce.ville)
              setWifi(annonce.wifi)
            })
          .catch((error) => {
            console.log(error)
          })
      }, []) 

    const update = (slug) => {
        let annonce = { chambres, chauffage, description, meuble, date, machineALaver, preference, prix, quartier, refrigerateur, surface, titre, type, ville, wifi};
        updateAnnonce( slug, annonce).then(res =>{
              Swal.fire(
                {
                    title: 'Modifiée!',
                    text: 'Votre annonce a été mise à jour.',
                    icon: 'success',
                    confirmButtonColor: '#1d314a',
                    confirmButtonText: 'OK',
                }
              ).then((result)=>{
                history.push("/user/mesannonces");
              })
            });
      }
    return(
      
        <Card style={{marginRight:250, marginLeft: 250, marginTop:100, marginBottom:100}} className="border border-dark bg-light text-dark box">
        <Card.Header>Ajouter une annonce</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Type d'annonce</Form.Label>
              <Form.Select value={type || ''} onChange={ (event) => { setType(event.target.value); }}>
                  <option>Choisissez un type ...</option>
                  <option>Appartement</option>
                  <option>Studio</option>
                  <option>Garçonnière</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>Ville</Form.Label>
              <Form.Select value={ville || ''} onChange={(event) => { setVille(event.target.value); }}>
                  <option>Choisissez une ville ...</option>
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
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quartier</Form.Label>
              <Form.Control value={quartier || ''} type="text" placeholder="Quartier" onChange={(event) => { setQuartier(event.target.value); }} />
            </Form.Group>


            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Nombre de Chambres</Form.Label>
                <Form.Control value={chambres || ''}  type="number" placeholder="Chambres" onChange={(event) => { setChambres(event.target.value); }}/>
              </Form.Group>
            </Row>

            <Row>  
              <Form.Group as={Col}>
                <Form.Label>Surface</Form.Label>
                <Form.Control value={surface || ''}  type="text" placeholder="Surface" onChange={(event) => { setSurface(event.target.value); }}/>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Prix</Form.Label>
                <Form.Control value={prix || ''}  type="text" placeholder="Prix" onChange={ (event) => { setPrix(event.target.value); }}/>
              </Form.Group>  
            </Row>
            <br></br>

                 <Row>
                  {['checkbox'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    
                      <Form.Check
                      inline
                      label="Chauffage"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(event) => { setChauffage(event.target.checked); }}
                      checked ={chauffage || false}
                    />
                      
                    <Form.Check
                    inline
                    label="Machine à laver"
                    type={type}
                    id={`inline-${type}-3`}
                    onChange={(event) => { setMachineALaver(event.target.checked); }}
                    checked={machineALaver || false}
                    />
           
                    <Form.Check
                    inline
                    label="Meublé"
                    type={type}
                    id={`inline-${type}-3`}
                    onChange={(event) => { setMeuble(event.target.checked); }}
                    checked={meuble || false}
                    />
                    
                    <Form.Check
                    inline
                    label="Refrigirateur"
                    type={type}
                    id={`inline-${type}-3`}
                    onChange={(event) => { setRefrigerateur(event.target.checked); }}
                    checked={refrigerateur || false}
                    />

                    <Form.Check
                    inline
                    label="WIFI"
                    type={type}
                    id={`inline-${type}-3`}
                    onChange={(event) => { setWifi(event.target.checked); }}
                    checked={wifi || false}
                    />              
                  </div>
                ))}
        </Row> 
          <Form.Group as={Col}>
              <Form.Label>Preferences</Form.Label>
              <Form.Control value={preference || ''} type="text" placeholder="Preferences" onChange={(event) => { setPreference(event.target.value); }}/>
          </Form.Group>


          <Form.Group className="mb-3">
              <Form.Label>Titre d'annonce</Form.Label>
              <Form.Control value={titre || ''} type="text" placeholder="titre d'annonce" onChange={ (event) => { setTitre(event.target.value); }}/>
          </Form.Group>    


          <Form.Group className="mb-3">
              <Form.Label>Description d'annonce</Form.Label>
              <FloatingLabel  controlId="floatingTextarea2" label="Description" >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '200px' }}
                  value={description || ''}
                  onChange={(event) => { setDescription(event.target.value);  }}
                />
              </FloatingLabel>
          </Form.Group>   

  {/* <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Photos</Form.Label>
    <Form.Control type="file" multiple />
  </Form.Group>
<br></br> */}
  <Button variant="primary" type="submit" onClick={(e) => { e.preventDefault();  update(slug); }}>
    Modifier votre annonce
  </Button>
</Form>
  </Card.Body>
  
</Card>
    )
  }
