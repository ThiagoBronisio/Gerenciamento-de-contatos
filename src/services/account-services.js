import axios from 'axios';

export const getApiUrl = () => {
    return "http://projetocontatos1-001-site1.itempurl.com";
}

export const postRegister = (data) => {
    return axios.post(getApiUrl() + "/api/Account/Register", data)
        .then(
            response => {
                return response.data;
            }
        )
}

export const postLogin = (data) => {
    return axios.post(getApiUrl() + "/api/Account/Login", data)
        .then(
            response => {
                return response.data;
            }
        )

}

export const postPassword = (data) => {
    return axios.post(getApiUrl() + "/api/Account/PasswordRecover", data)
        .then(
            response => {
                return response.data;
            }
        )
}