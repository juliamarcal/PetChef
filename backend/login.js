/* Login */
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // prevents the form from submitting and refreshing the page
    var email = document.getElementById('fname').value;
    var password = document.getElementById('lname').value;
    var response = fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        body: JSON.stringify({email: email, password: password}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json()).catch(notFound => {alert("Usuário não encontrado")})
        .then(data => {
            if(data != null && data.id != null) {
                localStorage.clear();
                localStorage.setItem('UserData', JSON.stringify(data));
                window.location.href = "../ti-mobile/index.html";
            } else {
                return
            }
        })
        .catch(error => {
            console.error('Error:', error);
        }); 
});