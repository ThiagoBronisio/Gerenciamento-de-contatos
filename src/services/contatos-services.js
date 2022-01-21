import axios from 'axios';
import * as authHelpers from '../helpers/auth-helpers';
 
export const getApiUrl = () => {
    return "http://projetocontatos1-001-site1.itempurl.com/api/Contatos";
}

export const postContatos = (data) => {
    return axios.post(getApiUrl(), data)
        .then (
            response => {
                return response.data;
            }
        )
}

export const putContatos = (data) => {
    return axios.put(getApiUrl(), data)
        .then(
            response => {
                return response.data;
            }
        )
}

export const getContatos = () => {
   return axios.get(getApiUrl())
        .then(
            response => {
                return response.data;
            }
        )
}

export const deleteContatos = (idContato) => {
    return axios.delete(getApiUrl() + "/" + idContato)
        .then(
            response => {
               return response.data;
            }
        )
}

export const getContatosById = (idContato) => {
    return axios.get(getApiUrl() + "/" + idContato)
        .then(
            response => {
                return response.data;            }
        )
}

axios.interceptors.request.use(
    config => {
        if(config.url.includes(getApiUrl())){
            var token = authHelpers.getAccessToken();
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
)