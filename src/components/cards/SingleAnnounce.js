import React from "react";
import { Card, Tabs} from 'antd';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import house from "../../images/house.jpeg";
import AnnonceListItems  from "./AnonceListItems";


 const { TabPane } = Tabs;

const SingleAnnounce = ({annonce, userinf, images}) => {

  const { titre,  description } = annonce;
  const {nom, prenom, email, telephone} = userinf;
 
  
  /* const userinfo = Object.entries({user}).map(([key, value]) => {
  
  let tab = {user}[key];
    console.log(Object.entries({tab}));     
}); */
  return (
    <>
      <div className="col-md-7">
        {images && images.length ? ( 
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={"data:image/jpeg;base64,"+i.image+""} key={i.id}/>) }
          </Carousel>
         ) : (
          <Card cover={<img src={house} className="mb-3 card-image" />}></Card>
        )  }
          
        <Tabs type="card">
          <TabPane tab="Description" key="1">
          {description}


          </TabPane> 

          <TabPane tab="Contact" key="2">
           Publié par  {prenom} {nom} <br/>
           Téléphone : {telephone} <br/>
           E-mail : {email} <br/><br/>


          </TabPane>
        </Tabs>
      </div>

      <div className="col-md-5">
        <h1 className="bg-warning p-3 text-primary">{titre}</h1>

        <Card>
          <AnnonceListItems  annonce={annonce}/>
        </Card>
      </div>
    </>
  );
};

export default SingleAnnounce;
