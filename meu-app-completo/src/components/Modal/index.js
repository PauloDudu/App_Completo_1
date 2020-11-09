import React, { useState, useEffect } from "react";

import { api } from '../../services/api';


const Modal = ({ id, nome, email, showUsers }) => {

  const [nomeNovo, setNomeNovo] = useState('');
  const [emailNovo, setEmailNovo] = useState('');

  const editUser = async (id) => {
    const params = {
      name: nomeNovo,
      email: emailNovo,
    };

    try {
      const response = await api.put(`users/${id}`, params);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      showUsers();
    }
  };

  useEffect(() => {
    setNomeNovo(nome);
    setEmailNovo(email);
  }, [nome, email])

  return (
    <div id={`modal${id}`} class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Edit</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <input
              value={nomeNovo}
              onChange={(e) => setNomeNovo(e.target.value)}
              placeholder={nome}
              class="form-control form-control-lg"
            />

            <input
              value={emailNovo}
              onChange={(e) => setEmailNovo(e.target.value)}
              placeholder={email}
              class="form-control form-control-lg"
            />

            <button type="button" class="btn btn-success" data-dismiss="modal" onClick={() => editUser(id)}>Save</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;