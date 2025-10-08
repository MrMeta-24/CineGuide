document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const loginSubmit = document.getElementById('login');
  const registerSubmit = document.getElementById('register');
  const logoutBtn = document.getElementById('logoutBtn');
  const aside = document.getElementById('asside');

  window.toggleForm = () => {
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
  };

  registerSubmit.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();

    if (!username || !email || !password) {
      alert('Por favor, preencha todos os campos para se registrar.');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      alert('Este email já está registrado. Por favor, faça login ou use outro email.');
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
    toggleForm();
    registerSubmit.reset();
  });

  loginSubmit.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!email || !password) {
      alert('Por favor, preencha todos os campos para fazer login.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
      alert(`Bem-vindo, ${foundUser.username}! Login realizado com sucesso.`);
      localStorage.setItem('isLoggedIn', JSON.stringify(foundUser));
      updateLogoutButtonVisibility();
      window.location.href = 'homePage.html';
    } else {
      alert('Email ou senha incorretos.');
    }
  });

  function updateLogoutButtonVisibility() {
    const loggedInUser = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (loggedInUser) {
      logoutBtn.style.display = 'block';
    } else {
      logoutBtn.style.display = 'none';
    }
  }
  updateLogoutButtonVisibility();

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    alert('Você foi desconectado.');
    updateLogoutButtonVisibility();
    window.location.href = 'login.html';
  });

  window.toggleAside = () => {
    aside.classList.toggle('active');
  };

  window.fecharAside = () => {
    aside.classList.remove('active');
  };
});


