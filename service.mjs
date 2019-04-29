import axios from 'axios';

const getData = async (url) => {
    const response = await axios(url);
    return response.data.trim();
}

export {
    getData
};