import React, { useState, useEffect } from "react";

import api from "../../services/api";

import Modal from "../../components/Modal";

import { 
  FormContainer,
  User,
  Body,
  UserContainer
} from './styles';

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const showUsers = async () => {
    try {
      const response = await api.get("users");
      setUsuarios(response.data);
      console.log(response);
    } catch (error) {
      console.log("showUsers: ", error);
    }
  };

  const createUser = async (id) => {
    const params = {
      name: `${nome}`,
      email: `${email}`,
    };

    try {
      const response = await api.post("users", params);
      console.log(response.data);
    } catch (error) {
      console.log("createUser: ", error);
    } finally {
      showUsers();
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await api.delete(`users/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      showUsers();
    }
  };

  useEffect(() => {
    showUsers();
  }, []);

  return (
    <>
      <FormContainer onSubmit={() => createUser()}>
        <div>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome..."
            class="form-control"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
            class="form-control"
          />
          <button class="btn btn-success" type="submit">Create</button>
        </div>
      </FormContainer>

      <UserContainer>
        {usuarios.map((user) => {
          return (
            <User key={user.id}>
                <strong>Nome:</strong> {user.name}
                <strong>Email:</strong> {user.email}
                <button
                  type="button"
                  class="btn btn-dark btn-lg"
                  data-toggle="modal"
                  data-target={`#modal${user.id}`}
                >
                  Edit
                </button>
                <button class="btn btn-danger btn-lg" onClick={() => deleteUser(user.id)}>Delete</button>

              <Modal id={user.id} nome={user.name} email={user.email} />
            </User>
          );
        })}
      </UserContainer>
    </>
  );
};

export default Users;