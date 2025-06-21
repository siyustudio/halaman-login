// JAVASCRIPT BUAT AKUN
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const messageDiv = document.getElementById('message');

  if (!name || !email || !password || !confirmPassword) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Semua kolom wajib diisi!';
    return;
  }

  if (password !== confirmPassword) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Password tidak cocok!';
    return;
  }

  // Ambil data user lama
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Cek apakah username sudah ada
  const userExists = users.some(user => user.username === name);
  if (userExists) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Username sudah digunakan!';
    return;
  }

  // Tambahkan user baru
  users.push({ username: name, password });
  localStorage.setItem('users', JSON.stringify(users));

  messageDiv.style.color = 'green';
  messageDiv.textContent = 'Registrasi berhasil!';
});

