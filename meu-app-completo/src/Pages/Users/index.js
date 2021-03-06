import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import BottomNavigator from "../../components/BottomNavigator";
import { api } from "../../services/api";
import Modal from "../../components/Modal";

import {
  FormContainer,
  User,
  Header,
  UserContainer,
} from "./styles";

import { useAuth } from "../../hooks/auth";

const useStyles = makeStyles(() => ({
  formControl: {
    margin: 1,
    width: 100,
    height: 100,
  },
  selectEmpty: {
    marginTop: 1,
  },
}));

const Users = () => {
  const { signOut } = useAuth();

  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState([]);
  const [enderecoId, setEnderecoId] = useState("");

  const classes = useStyles();

  const showUsers = async () => {
    try {
      const response = await api.get("users");
      const responseE = await api.get("endereco");
      setUsuarios(response.data);
      setEndereco(responseE.data);
      console.log(responseE.data);
      console.log(response.data);
    } catch (error) {
      console.log("showUsers: ", error);
    }
  };

  const createUser = async (id) => {
    const params = {
      name: `${nome}`,
      email: `${email}`,
      senha: `${senha}`,
      id_endereco: `${enderecoId}`,
    };

    try {
      const response = await api.post("users", params);
      console.log(response.data);
    } catch (error) {
      console.log("createUser: ", error);
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("do validate");
    }
  };

  useEffect(() => {
    showUsers();
  }, []);

  return (
    <>
      <BottomNavigator />
      <Header>
        <button onClick={() => signOut()}>Logout</button>
      </Header>

      <FormContainer onSubmit={() => createUser()}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome..."
          class="form-control"
          onKeyDown={(e) => handleKeyDown(e)}
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email..."
          class="form-control"
          onKeyDown={(e) => handleKeyDown(e)}
        />

        <input
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha..."
          class="form-control"
          onKeyDown={(e) => handleKeyDown(e)}
        />

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Cidade</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={enderecoId}
            onChange={(e) => setEnderecoId(e.target.value)}
          >
            {endereco.map((endereco) => {
              return (
                <MenuItem value={endereco.endereco_id}>
                  {endereco.cidade}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>Selecione sua cidade</FormHelperText>
        </FormControl>

        <button class="btn btn-success" type="submit">
          Create
        </button>
      </FormContainer>

      <UserContainer>
        {usuarios.map((user) => {
          return (
            <User key={user.user_id}>
              <div className="divInfo">
                <strong>Nome:</strong> <h6>{user.name}</h6>
                <strong>Email:</strong> <h6>{user.email}</h6>
              </div>
              <div className="buttonContainer">
                <button
                  type="button"
                  class="btn btn-dark btn-lg"
                  data-toggle="modal"
                  data-target={`#modal${user.user_id}`}
                >
                  Edit
                </button>
                <button
                  class="btn btn-danger btn-lg"
                  onClick={() => deleteUser(user.user_id)}
                >
                  Delete
                </button>
              </div>
              <Modal id={user.user_id} nome={user.name} email={user.email} showUsers={showUsers}/>
            </User>
          );
        })}
      </UserContainer>
    </>
  );
};

export default Users;
