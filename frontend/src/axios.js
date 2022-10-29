import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://100.107.69.82:8001/' //for development
    // baseURL: 'https://yoururl.com/' //for production
});

export default instance;