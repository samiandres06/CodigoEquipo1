function validar_formulario() {
  var  username = document.formRegistro.username;
  var email = document.formRegistro.correo;
  var password = document.formRegistro.password;

  var username_len = username.value.length;
   if(username_len ==0 || username_len <8) {
    alert("debes ingresar un username con min 8 caracteres");
   }

}