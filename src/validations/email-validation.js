const emailValidation = (value) =>{
    if (value.trim().length == 0){
        return 'Por favor, informe um e-mail'
    }
    else if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(value.trim())) {
        return 'Por favor, informe um endereço de e-mail válido'
    }
    return true;
}
export default emailValidation;