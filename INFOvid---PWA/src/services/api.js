import axios from 'axios';

const api = axios.create({
    baseURL : 'https://my-json-server.typicode.com/Einsteinn/ApiRestFake/',
});
export default api;