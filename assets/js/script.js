

var cadastro = function() {

  var user = document.getElementById('cad_user').value;
  var senha = document.getElementById('cad_senha').value;
  var senhaConfirm = document.getElementById('senha_confirm').value;
  var usernome = document.getElementById('nome').value;
  var usersob = document.getElementById('sobrenome').value;
    localStorage.setItem("user", user);
    localStorage.setItem("senha", senha);
    localStorage.setItem("usernome", usernome);
    localStorage.setItem("usersob", usersob);
    localStorage.setItem("senhaConfirm", senhaConfirm);
}

function verTecla() {
  if(event.keyCode > 48 && event.keyCode < 57) {
    alert("Não digite números.")
    document.getElementById('nome').value = "";
  } else {
  };
  if(event.keyCode == 32) {
    alert("Não digite espaço.")
  }else {

  };
}
function verificarEspaco() {
  if(event.keyCode == 32) {
    alert("Não digite espaço.")
    document.getElementById('cad_user').value = "";
    document.getElementById('cad_senha').value = "";
  }else {

  }
}


var verificarSenha = function() {
  var senha1 = document.getElementById('cad_senha').value;
  var senha2 = document.getElementById('senha_confirm').value;
  if(senha1 != senha2) {
    alert("Senhas não são iguais.");
    var senha1 = document.getElementById('cad_senha').value = "";
    var senha2 = document.getElementById('senha_confirm').value = "";
  } else {
    window.location.href = "pagina.html";
  }
}



function salvar() {
  cadastro();
  verificarSenha();
}
/*
var mudarBar = function() {
  var bar = document.getElementById('nome');
  bar.style.borderBottom = "3px solid red";
}
*/
function receber() {
  var loginUser = document.getElementById('loginUser').value;
  var loginSenha = document.getElementById('loginSenha').value;


  if(loginUser == localStorage.user && loginSenha == localStorage.senha) {
    alert("correto");
  } else {
    alert("incorreto.");
  }

}