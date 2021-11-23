import React, { useState, useEffect } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { getallannonces, deleteAnnonce} from "../../functions/Annonce";
import {  DeleteOutlined } from "@ant-design/icons";
import image from "../../images/house.jpeg";
import { Image, Avatar} from 'antd';
import LocalSearch from "../../components/forms/LocalSearch";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const AnnonceList = () => {
/*   const { user } = useSelector((state) => ({ ...state })); */


  const [loading, setLoading] = useState(false);
  const [annonces, setAnnonces] = useState([]);
  const [keyword, setKeyword] = useState("");

  let history = useHistory();
  let { user } = useSelector((state) => ({ ...state }));
  const role = localStorage.getItem("role") ;
  const id = localStorage.getItem("id") ;

if(!id || role ==="utilisateur"){
  history.push('/login');
} 
  useEffect(() => {
    loadAnnonces();
  }, []);

  const loadAnnonces = () =>
    getallannonces().then((c) => setAnnonces(c.data));

 

  const handleRemove = async (id) => {
    if (window.confirm("Voulez-vous supprimer cette annonce ?")) {
      setLoading(true);
      deleteAnnonce(id)
        .then((res) => {
          setLoading(false);
          toast.error(`Annonce supprimée `);
          loadAnnonces();
        })
        .catch((err) => {
          if (err) {
            setLoading(false);
            toast.error(err.response);
          }
        });
    }
  };

  const searched = (keyword) => (c) => c.titre.toLowerCase().includes(keyword);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          <br/>
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>Liste des annonces</h4>
          )}

          <br/>
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />

          {annonces.filter(searched(keyword)).map((c) => (
            <div className="alert alert-secondary" key={c.id}>
              
              <div style={{ marginTop:"1%", display:"flex"}}> 
             <Avatar shape="square" size={150} src={<Image src={"data:image/jpeg;base64,"+c.images[0].image+""} style={{ width: 150, height:120,float:"left" }} />} />
           
                <span style={{ marginTop:"2%",marginLeft:"2%"}}> 
                {"  "} <b>{c.titre} </b><br/>
                {"  "}  <b>{c.prix} DH </b><br/>
                {"  "}  <b>{c.ville} </b><br/>
                </span>
                
                
              <span
                onClick={() => handleRemove(c.id)}
                className="btn btn-sm " style={{marginLeft:"60%"}}
              >
                <DeleteOutlined className="text-danger" />
              </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnonceList;