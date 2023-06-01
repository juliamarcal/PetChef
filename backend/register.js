

/* cadastro */
let registerForm = document.getElementById("registerForm");

registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevents the form from submitting and refreshing the page
    var name = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var ConfirmPassword = document.getElementById('confirm_password').value;

    if(password != ConfirmPassword) {
        alert("Certifique-se de que a senha e a confirmação de senha estejam digitadas corretamente e que coincidam. Tente novamente");
        return
    }

    
    fetch("http://localhost:8080/api/user/new", {
        method: "POST",
        body: JSON.stringify({fullName: name, email: email, password: password}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data => {
        if(data.id != null) {
            localStorage.clear();
            localStorage.setItem('UserData', JSON.stringify(data));
            window.location.href = "../ti-mobile/index.html";
        } else {
            return "Erro ao cadastrar usuário"
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


