const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3333;
const db = require('./queries');
var cors = require('cors');

app.use(cors()) ;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extend: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.JS, Express and Postgres API'})
})

// usuarios
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);


// usuario e endereco
app.get('/teste', db.innerJoin);


// endereco
app.get('/endereco', db.getEnderecos);

app.listen(port, () => {
    console.log(`App running on port ${port} `);
})