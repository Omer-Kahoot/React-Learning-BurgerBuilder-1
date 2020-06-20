import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-testing-d0a7c.firebaseio.com/'
});

export default instance