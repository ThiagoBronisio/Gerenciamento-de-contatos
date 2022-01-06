const textFieldValidation = (value) =>{
    
    if(value.trim().length < 10){
        return "Por favor, digite seu nome completo"
    }
    else if(value.trim().length > 150){
        return "O limite máximo é de 150 caracteres "
    }
    
    return true;
} 

export default textFieldValidation;