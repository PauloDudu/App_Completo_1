// import React, { useState, useEffect } from "react";

// import { api1 } from "../../services/api";

// import { Link } from "react-router-dom";

// const UsersApijava = () => {

//   const [usuarios, setUsuarios] = useState([]);

//   const showUsers = async () => {
//     try {
//       const response = await api1.get("users");
//       setUsuarios(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.log("showUsers: ", error);
//     }
//   };

//   useEffect(() => {
//     showUsers();
//   }, []);

//   return (
//     <>
//         <div>{usuarios.map(user => {
//             return(
//               <>
//                 <h3><strong>Email: </strong>{user.email}</h3>
//                 <h3><strong>Senha: </strong>{user.senha}</h3>
//               </>
//             );
//         })}</div>
//     </>
//   );
// };
// export default UsersApijava;