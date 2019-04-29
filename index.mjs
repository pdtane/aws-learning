import { getData } from './service';
const url = 'http://checkip.amazonaws.com/';

const main = async () => {
    const data = await getData(url);
    console.log(data);
    return data;
};

main();

export {
    main
};