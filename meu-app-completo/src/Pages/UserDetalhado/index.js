import React, { useState, useEffect } from "react";

import api from "../../services/api";

import { Link } from "react-router-dom";

const Users2 = () => {

  const [usuarios, setUsuarios] = useState([]);

  const showUsers = async () => {
    try {
      const response = await api.get("teste");
      setUsuarios(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("showUsers: ", error);
    }
  };

  useEffect(() => {
    showUsers();
  }, []);

  return (
    <>
        <div>{usuarios.map(user => {
            return(
            <h3><strong>Nome: </strong>{user.name}</h3>
            );
        })}</div>
    
    </>
  );
};


export default Users2;