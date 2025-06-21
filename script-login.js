// JAVA SCRIPT LOGIN
let usernameInput = document.getElementById('usernameInput')
        let passwordInput = document.getElementById('passwordInput')
        let loginButton = document.getElementById('loginButton')
        let logoutButton = document.getElementById('logoutButton')
        let buatAkun = document.getElementById('buatAkun')


        logoutButton.style.display = "none";


        function onLogin() {
            const inputUsername = usernameInput.value.trim();
            const inputPassword = passwordInput.value;
            const users = JSON.parse(localStorage.getItem('users')) || [];

            const matchedUser = users.find(user =>
                user.username === inputUsername && user.password === inputPassword
            );

            if (matchedUser) {
                localStorage.setItem("currentUser", matchedUser.username);
                document.getElementById('login-message').style.color = 'green';
                document.getElementById('login-message').textContent = "Login berhasil!";
                buatAkun.style.display = "none";
                usernameInput.style.display = "none";
                passwordInput.style.display = "none";
                loginButton.style.display = "none";
                logoutButton.style.display = "block";
            } else {
                document.getElementById('login-message').style.color = 'red';
                document.getElementById('login-message').textContent = "Username atau password salah.";
            }
        }

        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                onLogin();
            }
        });


        function onLogout() {
            localStorage.removeItem("currentUser");
            location.reload();
        }