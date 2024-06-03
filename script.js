document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Dummy validation logic
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform other actions
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

