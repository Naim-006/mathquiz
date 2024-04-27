
    document.getElementById('link').addEventListener('click', function() {
      document.getElementById('passForm').style.display = 'block';
    });

    document.getElementById('showPassword').addEventListener('change', function() {
      var passwordInput = document.getElementById('password');
      if (this.checked) {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    });

    document.getElementById('passwordForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var password = document.getElementById('password').value;
      if (password === 'alcicek') {
        window.location.href = 'flower.html';
      } else {
        alert('Incorrect password, please try again.');
      }
    });
  