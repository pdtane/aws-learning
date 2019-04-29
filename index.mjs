import { getData } from './service';
const url = 'http://checkip.amazonaws.com/';

const main = async () => {
    const data = await getData(url);
    return data;
};

main();