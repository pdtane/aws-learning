import axios from 'axios';

const getData = async (url) => {
    const response = await axios.get(url);
    return (await response.data).trim();
}

export {
    getData
};