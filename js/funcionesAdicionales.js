function showTag(id){
    $('#' + id).show();
}

function hideTag(id){
    $('#' + id).hide();
}


function showSection(idShow, idHide){
    showTag(idShow);
    hideTag(idHide);
}


function valorAtributo(id){
    return $("#" + id).val()
}

function confirmPassword(){
    if (valorAtributo('confmPassword') != valorAtributo('regPassword')){
        alert('Las contraseñas no coinciden');
    }
}

function validarCampos(arg){
    switch(arg){
        case 'login':
            if (valorAtributo('email') == ''){alert('The email can not be empty'); return false}
            if (valorAtributo('password') == ''){alert('The password can no be empty'); return false}
            return true;
        // case 'register':
        //     if (valorAtributo('regPassword') == ''){alert('La contraseña no puede ser vacia'); return false}
        //     if (valorAtributo('confmPassword') != valorAtributo('regPassword')){alert('Las contraseñas no coinciden'); return false;}
        //     return true;
    }
}