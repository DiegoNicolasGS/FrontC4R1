// function validarCampos(){
//     var name = $.trim($('#uName').val());
//     var email = $.trim($('#uEmail').val());
//     var password = $.trim($('#uPassword').val());
//     var password2 = $.trim($('#uPasswordCon').val());
//     if(name === ""){
//         alert("The user name can not be empty")
//         return false;
//     }
//     if(email === ""){
//         alert("The email can not be empty")
//         return false;
//     }
//     if(password === ""){
//         alert("The password can not be empty")
//         return false;
//     }
//     if(password != password2){
//         alert("The passwords do not match")
//         return false;
//     }
// }

function validateEmail() {
    inputText = document.getElementById("uEmail").value
    console.log("inputText", inputText)
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        alert("Ok: The email entered has the correct format (name@domain_name.domain)");
        //document.querySelector("useremail").focus();           
        // document.getElementById("bt").disabled = false;
        return true;
    }
    else {
        console.log(inputText)
        alert("Attention: The email is not in the correct format. Please correct (name@domain_name.domain) \ n \ n ** To continue you MUST provide a valid email. ** To continue you MUST provide a valid email. **");
        //document.getElementById("useremail").focus()        
        return false;
    }
}

function register(event){
    let data = {
        name :$('#uName').val(),
        email :$('#uEmail').val(),
        password :$('#uPassword').val()
    }
    debugger;
    event.preventDefault();

    if($('#uName').val() === "" ){
        alert("The user name can not be empty")
        return 0;
    }
    if($('#uEmail').val() === ""){
        alert("The email can not be empty")
        return 0;
    }
    if ($('#uPassword').val() === "")
    {
        alert("The password can not be empty")
        return 0;
    }   
    if($('#uPassword').val() != $('#uPasswordCon').val()){
        alert("The passwords do not match")
        return 0;
    }   
    if(validateEmail() == true){
        
        console.log(data)
    
        let datosPeticion = JSON.stringify(data)
    
        $.ajax({
            
            url: "http://129.151.109.22:8080/api/user/new",
            data: datosPeticion,
            method: 'POST',
            contentType: "application/JSON",
            dataType: 'json',
            
            success: function (response) {
                if(response.id == null){
                    alert("The user has already registered");
                  
                }
                else{
                console.log(response)
                console.log("The user has been correctly registered.")
                alert("The user has been correctly registered.");
                location.reload();
            }
            },
            error: function (jqXHR, textStatus, errrorThrow) {
                if(response.id == null){
                    alert("The user has already registered");
                }
                alert("Error")                
            }
        })
    }

    
}
