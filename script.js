document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    var password = document.getElementById('password').value;
    if(password === 'hinkle') {
        window.location.href = 'main.html'; // Redirect to main.html
    } else {
        alert('Login failed!');
    }
});
