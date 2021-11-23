import axios from "axios";

export const getannonce= async (slug) =>
  await axios.get(`http://localhost:8080/annonce/getannonce/${slug}`);

export const getallannonces= async () =>
  await axios.get(`http://localhost:8080/annonce/get`);

export const  deleteAnnonce= async (id) =>
  await axios.delete(`http://localhost:8080/annonce/delete/${id}`);

export const  getAnnonceCount= async () =>
  await axios.get(`http://localhost:8080/annonce/count`);

  export const getMesAnnonce = async (id) => 
  await axios.get("http://localhost:8080/annonce/mesAnnonces/"+id);

  export const getAnnonce = async (id) =>
   await axios.get("http://localhost:8080/annonce/annonce/"+id);

  export const addAnnonce = async (data) =>
   await axios.post("http://localhost:8080/annonce/annonce/save", data);

  export const updateAnnonce = async (id, annonce) => 
  await axios.put("http://localhost:8080/annonce/annonce/"+id, annonce);
  