import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/'
    // baseURL: 'http://localhost:3333'
})

export default api; 

// json-server --watch db.json --port 3333