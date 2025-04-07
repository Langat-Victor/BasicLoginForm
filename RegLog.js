document.addEventListener('DOMContentLoaded', function() {
  // Get form elements
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const showRegisterLink = document.getElementById('show-register');
  const showLoginLink = document.getElementById('show-login');

  // Toggle to register form
  showRegisterLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
  });

  // Toggle to login form
  showLoginLink.addEventListener('click', function(e) {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  });

  // Login form submission
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login form submitted!');
    // Add your login logic here
  });

  // Register form submission
  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration form submitted!');
    // Add your registration logic here
  });
});
