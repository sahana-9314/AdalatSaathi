 function validateForm() {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            if (email === '' || password === '') {
                alert('Email and Password are required fields');
                return false;
            }

            return true;
        }
