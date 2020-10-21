const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: 'postgres',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
        if(error) {
            throw error;
        }
        console.log(response.json(results.rows))
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM users WHERE user_id = $1', [id], (error, results) => {
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email, senha, idEndereco } = request.body;

    pool.query('INSERT INTO users (name, email, senha, id_endereco) VALUES ($1, $2, $3, $4)', [name, email, senha, idEndereco], (error, results) => {
        if(error) {
            throw error;
        }
        response.status(201).send(`User added with ID: ${response}`);
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE user_id = $3', 
        [name, email, id],
        (error, results) => {
            if(error) {
                throw error;
            }
            response.status(200).send(`User modified width ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error;
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

const innerJoin = (request, response) => {
    pool.query('SELECT u.user_id, u.name, u.email, u.senha,	e.pais,	e.estado, e.cidade FROM	users u INNER JOIN endereco e ON u.id_endereco = e.endereco_id;', (error, results) => {
        if(error) {
            throw error;
        }
        console.log(response.json(results.rows))
    });

}

const getEnderecos = (request, response) => {
    pool.query('SELECT * FROM endereco', (error, results) => {
        if(error) {
            throw error;
        }
        console.log(response.json(results.rows))
    });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    innerJoin,
    getEnderecos,
}

