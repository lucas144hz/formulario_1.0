function logar() {
  var email = document.getElementById('email').value
  var senha = document.getElementById('senha').value

  if (email == 'diassilvalucas36@gmail.com' && senha == 'lucaslucas') {
    location.href = 'https://lucas144hz.github.io/form-test/'
  } else {
    alert('Usuario ou senha incorretos')
  }
}
