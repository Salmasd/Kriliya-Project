import React, { useEffect, useState } from "react";
import { getannonce } from "../functions/Annonce";
import SingleAnnounce from "../components/cards/SingleAnnounce";



const Annonce = ({match}) => {

  let { slug } = match.params;

  const [annonce, setAnnonce] = useState([]);
  const [userinf, setUserinf] = useState([]);
  const [images, setimages] = useState([]);

 useEffect(() => {
  getannonce(slug).then((res) => {
    setAnnonce(res.data);
    setUserinf(res.data.user);
    setimages(res.data.images);
    console.log(res.data);

  });

});




  return (
    <div className="container-fluid">
      <div className="row pt-5">
        <SingleAnnounce
         annonce={annonce}
         userinf={userinf}
         images={images}/>
      </div>


    </div>
  );
};

export default Annonce;
