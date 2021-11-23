import React, { useState } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, FloatingLabel } from 'react-bootstrap';
import Swal from 'sweetalert2';
import {addAnnonce} from '../../functions/Annonce'
import '../../App.css';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Ajoutannonce() {

  let history = useHistory();
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
  const [date, setDate] = useState(new Date());
  const [ville, setVille] = useState('');
  const [wifi, setWifi] = useState(false);
  const [images, setImages] = useState([]);

  let { user } = useSelector((state) => ({ ...state }));
  const id = localStorage.getItem("id") ;
  const role = localStorage.getItem("role") ;

  if(!id || role ==="admin"){
    history.push('/login');
} 


   const selectFiles = (image) =>{
             setImages(image)
    }
      
   const saveAnnonce = (a) => {
        console.log(images);
        a.preventDefault();
        let annonce = {user_id: id , chambres, chauffage, description, meuble, date, machineALaver, preference, prix, quartier, refrigerateur, surface, titre, type, ville, wifi};
        var data = new FormData();
        data.append('annonce',  JSON.stringify(annonce));
        for (let i = 0; i < images.length; i++) {
          data.append(`files`, images[i])
        }
        addAnnonce(data).then(res =>{
                  Swal.fire(
                    {
                        title: 'Ajoutée!',
                        text: 'Votre annonce a été ajouteée.',
                        icon: 'success',
                        confirmButtonColor: '#1d314a',
                        confirmButtonText: 'OK',
                    }
                  );
                });
                history.push("/user/mesannonces");
        }
 
    return(
      
<Card style={{marginRight:250, marginLeft: 250, marginTop:100, marginBottom:100}} className="border border-dark bg-light text-dark box">
  <Card.Header>Ajouter une annonce</Card.Header>
  <Card.Body>
  <Form>

  <Form.Group>
    <Form.Label>Type d'annonce</Form.Label>
    <Form.Select defaultValue="Type" onChange={(event) => { 
      console.log(event.target.value)
      setType(event.target.value); }}>
        <option>Choisissez un type ...</option>
        <option>Appartement</option>
        <option>Studio</option>
        <option>Garçonnière</option>
      </Form.Select>
  </Form.Group>

  <Form.Group>
    <Form.Label>Ville</Form.Label>
    <Form.Select defaultValue="ville" onChange={(event) => { 
      console.log(event)
      setVille(event.target.value); }}>
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
    <Form.Control type="text" placeholder="Quartier" onChange={(event) => { 
       console.log(event.target.value)
       setQuartier(event.target.value); }} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>


  <Row className="mb-3">
    <Form.Group as={Col}>
    <Form.Label>Nombre de Chambres</Form.Label>
    <Form.Control type="number" placeholder="Chambres" onChange={(event) => { 
       console.log(event.target.value)
      setChambres(event.target.value); }}/>
    </Form.Group>
  </Row>

  <Row>  
    <Form.Group as={Col}>
    <Form.Label>Surface</Form.Label>
    <Form.Control type="text" placeholder="Surface" onChange={(event) => { 
       console.log(event.target.value)
      setSurface(event.target.value); }}/>
    </Form.Group>

    <Form.Group as={Col}>
    <Form.Label>Prix</Form.Label>
    <Form.Control type="text" placeholder="Prix" onChange={(event) => { 
       console.log(event.target.value)
      setPrix(event.target.value); }}/>
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
       onChange={(event) => { 
        console.log(event.target.checked)
        setChauffage(event.target.checked); }}
      />
        <Form.Check
        inline
        label="Machine à laver"
        type={type}
        id={`inline-${type}-3`}
        onChange={(event) => { 
          console.log(event.target.checked);
          setMachineALaver(event.target.checked); }}
        />


      <Form.Check
        inline
        label="Meublé"
        type={type}
        id={`inline-${type}-3`}
        onChange={(event) => { 
          console.log(event.target.checked);
          setMeuble(event.target.checked); }}
        />

        <Form.Check
        inline
        label="Refrigirateur"
        type={type}
        id={`inline-${type}-3`}
        onChange={(event) => { 
          console.log(event.target.checked);
          setRefrigerateur(event.target.checked); }}
        />

        <Form.Check
        inline
        label="WIFI"
        type={type}
        id={`inline-${type}-3`}
        onChange={(event) => { 
          
          console.log(event.target.checked);
          setWifi(event.target.checked); }}
        />
    </div>
  ))}
    </Row>
  <Form.Group as={Col}>
    <Form.Label>Preferences</Form.Label>
    <Form.Select defaultValue="Type" onChange={(event) => { 
      console.log(event.target.value)
      setPreference(event.target.value); }}>
        <option>Choisissez vos preferences ...</option>
        <option>Filles</option>
        <option>Garcons</option>
      </Form.Select>
  </Form.Group>
  

    <Form.Group className="mb-3">
    <Form.Label>Titre d'annonce</Form.Label>
    <Form.Control type="text" placeholder="titre d'annonce"  onChange={(event) => {  
       console.log(event.target.value);
       setTitre(event.target.value); }}/>
  </Form.Group>    


  <Form.Group className="mb-3">
    <Form.Label>Description d'annonce</Form.Label>
  <FloatingLabel controlId="floatingTextarea2" label="Description"  onChange={(event) => {  
    console.log(event.target.value);
     setDescription(event.target.value); }}>
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '200px' }}
    />
  </FloatingLabel>
  </Form.Group>   
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Photos</Form.Label>
    <Form.Control type="file" name ="images" multiple accept=".png, .jpg, .jpeg" onChange={(event) => {
      console.log(event.target.files);
      selectFiles(event.target.files)} }/>
  </Form.Group>
<br></br>
  <Button variant="primary" type="submit" onClick={saveAnnonce}>
    Ajouter votre annonce
  </Button>
</Form>
  </Card.Body>
  
</Card>
    )

}
