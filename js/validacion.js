function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener("click" , function(event){

    controlCampos();
    
    });

function controlCampos(){

let nom = document.getElementById('nombre');
let ape = document.getElementById('apellido');
let email = document.getElementById('email');
let pass1 = document.getElementById('password1');
let pass2 = document.getElementById('password2');
let terminos = document.getElementById('terminos').checked;

if(nom.value == ""||ape.value== ""||email.value==""||pass1.value==""||pass2.value ==""){
    showAlertError();
    return;
   
}
  if (pass1.value.length<6){
        showAlertError();
        return;
        
    }
        if(pass1.value !== pass2.value){
            showAlertError();
            return;
            
        }
            if(!terminos){
                showAlertError();
                return;
                
            }
                showAlertSuccess();
            }
        


    



