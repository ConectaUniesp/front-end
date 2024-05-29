document.getElementById('formulario').addEventListener('submit', function (event) {

  event.preventDefault();


  var nome = document.getElementById('nome').value;
  var sobrenome = document.getElementById('sobrenome').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('confirmar-senha').value;
  var curso = document.getElementById('curso').value;
  var matricula = document.getElementById('matricula-uniesp').value;

  if (!nome || !sobrenome || !email || !senha || !confirmarSenha || !curso || !matricula) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um email válido.');
    return;
  }

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem.');
    return;
  }
  alert('Formulário enviado com sucesso!');
  document.getElementById('formulario').submit();
});

