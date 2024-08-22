document.addEventListener("DOMContentLoaded", () =>{

    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }
    
    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }
    
    function controlCampos(){
    
    let nom = document.getElementById('nombre');
    let ape = document.getElementById('apellido');
    let email = document.getElementById('email');
    let pass1 = document.getElementById('password1');
    let pass2 = document.getElementById('password2');
    
    if(nom.value == ""||ape.value== ""||email.value==""||pass1.value==""||pass2.value ==""){
        showAlertError();
        return;
       
    } }

    if (pass1.length < 6){
        showAlertError();
        return;
    }

})
        


    



