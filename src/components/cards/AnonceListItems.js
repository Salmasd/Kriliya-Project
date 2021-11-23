import React from "react";

const AnnonceListItems = ({annonce}) => {
   const {
    prix,
    type,
    ville,
    quartier,
    surface,
    chambres,
    meuble,
    wifi,
    refrigerateur,
    chauffage,
    machineALaver,
    preference,

  } = annonce; 

  return (
    <ul className="list-group">
      <li className="list-group-item ">
         Prix{" "}
        <span className="label label-default label-pill pull-xs-right text-primary" style={{float: "right"}}>
           {prix} Dh
        </span>
      </li>

      
      <li className="list-group-item">
      Type{" "}
        <span className="label label-default label-pill pull-xs-right text-primary"  style={{float: "right"}}> 
          {type}
        </span>
      </li>

    
      <li className="list-group-item">
      Ville{" "}
        <span className="label label-default label-pill pull-xs-right text-primary" style={{float: "right"}}> 
          {ville}
        </span>
      </li>

      <li className="list-group-item">
     Quartier{" "}
        <span className="label label-default label-pill pull-xs-right text-primary" style={{float: "right"}}> 
         {quartier}
        </span>
      </li>
      <li className="list-group-item">
        Surface{" "}
        <span className="label label-default label-pill text-primary" style={{float: "right"}}>
          {surface} m2
        </span>
      </li>

      <li className="list-group-item">
        Nombre de chambres{" "}
        <span className="label label-default label-pill text-primary" style={{float: "right"}}>
          {chambres}
        </span>
      </li>


      <li className="list-group-item">
      Mobiliers{" "}
        
          { meuble==true? 
          (<span className="label label-default label-pill text-primary" style={{float: "right"}}>
          Oui</span>) 
          : (<span className="label label-default label-pill text-primary" style={{float: "right"}}>
          Non</span>)
          }
        
      </li>

      <li className="list-group-item">
        Wi-Fi{" "}
        { wifi==true? 
          (<span className="label label-default label-pill text-primary" style={{float: "right"}}>
          Oui</span>) 
          : (<span className="label label-default label-pill text-primary" style={{float: "right"}}>
          Non</span>)
          }
      </li>

      <li className="list-group-item">
      Réfrigérateur{" "}
      { refrigerateur==true? 
          (<span className="label label-default label-pill text-primary" style={{float: "right"}}>
          Oui</span>) 
          : (<span className="label label-default label-pill text-primary" style={{float: "right"}}>
          Non</span>)
          }
      </li>

      <li className="list-group-item">
      Chauffe-eau{" "}
      { chauffage==true? 
          (<span className="label label-default label-pill text-primary" style={{float: "right"}}>
          Oui</span>) 
          : (<span className="label label-default label-pill text-primary" style={{float: "right"}}>
          Non</span>)
          }
      </li>

      
      <li className="list-group-item">
      Machine à laver{" "}
      { machineALaver==true? 
          (<span className="label label-default label-pill text-primary" style={{float: "right"}}>
          Oui</span>) 
          : (<span className="label label-default label-pill text-primary" style={{float: "right"}}>
          Non</span>)
          }
      </li>

      <li className="list-group-item">
      Préférence{" "}
        <span className="label label-default label-pill pull-xs-right text-primary" style={{float: "right"}}> 
          {preference}
        </span>
      </li>


    </ul>
  );
};

export default AnnonceListItems;
