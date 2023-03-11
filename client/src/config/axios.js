import axios from 'axios';
// const SERVER_URL = 'http://localhost:3005';

export default axios.create({
    withCredentials: true,
});
