import axios from "axios";

export const  getUsers= async () =>
  await axios.get(`http://localhost:8080/users/allUsers`);

export const  removeUser= async (id) =>
  await axios.delete(`http://localhost:8080/users/deleteUser/${id}`);

export const  getUserCount= async () =>
  await axios.get(`http://localhost:8080/users/count`);

export const addUser = async (data)=>
  await axios.post("http://localhost:8080/users/addUser",data)


