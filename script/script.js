const user = document.getElementById('exampleInputEmail1')
const password = document.getElementById('exampleInputPassword1')
const form = document.getElementById('form')
const error = document.getElementById('error')

let userJson, passJson

// evento do botão entrar
form.addEventListener('submit', (e) => {
    e.preventDefault()

    // caminho para o json
    fetch('http://demo7535270.mockable.io/login').then(function(resp) {
        // pega o obj
        return resp.json()
    }).then(function(data) {
        // pega os atributos
        userJson = data.user
        passJson = data.password
        if(user.value === userJson && password.value === passJson){
            window.location.href = "dashboard.html"
        } else {
            alert("Credenciais inválidas")
            error.innerHTML = '*Credenciais inválidas'
        }
    }).catch(function(error) {
        // erro de conexão
        alert(error)
    })

})