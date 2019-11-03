import axios from 'axios';

export const ping = () => {
    axios.get('/ping');
}

export const download = (params) => {
    axios.get('/download', params);
}

export default {
    ping,
    download,
}
