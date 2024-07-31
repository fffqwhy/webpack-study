import axios from 'axios';

const baseConfig  = {
    baseURL:"http://localhost:8080/",
    timeout:60000,
}
const instance = axios.create(baseConfig);

export default instance;