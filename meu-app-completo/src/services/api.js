import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3333/'
    // baseURL: 'http://localhost:3333'
})

export const api1 = axios.create({
    baseURL:"https://api-alterdata-cirrus.herokuapp.com/api/"
 
})


// json-server --watch db.json --port 3333