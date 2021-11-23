import React, { useState, useEffect } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { getUsers, removeUser} from "../../functions/user";
import {  DeleteOutlined } from "@ant-design/icons";
import { Avatar} from 'antd';
import LocalSearch from "../../components/forms/LocalSearch";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const UsersList = () => {
/*   const { user } = useSelector((state) => ({ ...state })); */


  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");

  let history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));
  const role = localStorage.getItem("role") ;
  const id = localStorage.getItem("id") ;


  if(!id || role ==="utilisateur"){
    history.push('/login');
  } 
  useEffect(() => {
    loadUsers();
  }, []);


  const loadUsers = () =>
    getUsers().then((c) => setUsers(c.data));

 

  const handleRemove = async (id) => {
    if (window.confirm("Voulez-vous supprimer ce utilisateur ?")) {
      setLoading(true);
      removeUser(id)
        .then((res) => {
          setLoading(false);
          toast.error(`Utilisateur supprimé `);
          loadUsers();
        })
        .catch((err) => {
          if (err) {
            setLoading(false);
            toast.error(err.response);
          }
        });
    }
  };

  const searched = (keyword) => (c) => c.prenom.toLowerCase().includes(keyword);

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
            <h4>Liste des utilisateurs</h4>
          )}

          <br/>
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />

          {users.filter(searched(keyword)).map((c) => (
            <div className="alert alert-secondary" key={c.id}>
              
              <Avatar size={55} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{c.prenom.charAt(0).toUpperCase()}{c.nom.charAt(0).toUpperCase()}</Avatar>
                {"  "} <b>{c.prenom} {c.nom}</b>
              
              
              <span
                onClick={() => handleRemove(c.id)}
                className="btn btn-sm " style={{float:"right"}}
              >
                <DeleteOutlined className="text-danger" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;