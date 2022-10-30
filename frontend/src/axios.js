import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://stratethon.herokuapp.com/:8001/' //for development
    // baseURL: 'https://yoururl.com/' //for production
});

export default instance;