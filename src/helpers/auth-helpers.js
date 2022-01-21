
export const singIn = (data) => {
    localStorage.setItem("USER_AUTH", JSON.stringify(data));
}

export const getAccessToken = () => {

    var data = localStorage.getItem("USER_AUTH");
    var auth = JSON.parse(data);
    
    return auth.accessToken;
}

export const getUsuario = () => {
    
    var data = localStorage.getItem("USER_AUTH");
    var auth = JSON.parse(data);
    return auth.usuario;
}

export const getEmail = () => {
    var data = localStorage.getItem("USER_AUTH");
    var auth = JSON.parse(data);
    return auth.email;
}

export const singOut = () => {
    localStorage.removeItem("USER_AUTH");
}

export const isAuthenticated = () => {
    return localStorage.getItem("USER_AUTH") != null;
}

