import axios from 'axios';

export const ping = () => {
    axios.get('/ping');
};

export const download = params => {
    axios.post('/download', params).then(() => {
        window.open('http://localhost:8080/download', '_blank');
    });
};

export default {
    ping,
    download,
};
