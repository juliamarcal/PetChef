/* Login */
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevents the form from submitting and refreshing the page
    var email = document.getElementById('fname').value;
    var password = document.getElementById('lname').value;
    fetch(/* endPoint -> login */)
    .then(response => response.json())
    .then(data => {
        if(!isEmpty(data)) {
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