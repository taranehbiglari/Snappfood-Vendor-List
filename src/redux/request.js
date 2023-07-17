import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://snappfood.ir/mobile/v3',
    headers: { 'Content-Type': 'application/json' },
});

export default instance;