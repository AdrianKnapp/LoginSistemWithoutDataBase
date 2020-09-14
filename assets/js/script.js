
var cadastro = function() {
  var user = document.getElementById('cad_user').value;
  var senha = document.getElementById('cad_senha').value;
  localStorage.setItem("user", user);
  localStorage.setItem("senha", senha);
}

function salvar() {
  cadastro();
  window.location.href="login.html"
}

function receber() {
  var loginUser = document.getElementById('loginUser').value;
  var loginSenha = document.getElementById('loginSenha').value;

  if(loginUser == localStorage.user && loginSenha == localStorage.senha) {
    alert("correto");
  } else {
    alert("incorreto.");
  }

}