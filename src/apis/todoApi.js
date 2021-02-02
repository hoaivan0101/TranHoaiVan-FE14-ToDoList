import axios from 'axios';

export const getApi = (endpoint, method = 'GET', data) => {
    return axios({
        method: method,
        url: 'http://localhost:3000/' + endpoint,
        data: data
    })
        .catch(err => {
        console.log(err);
    })
        
}