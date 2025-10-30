document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeat-password').value;

    if (password !== repeatPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Further validation and submission logic here
    window.location.href = 'proj2.html';
});
