// js/views/authView.js
export function renderLoginAndRegisterForm(onSubmitLogin, onSubmitRegister) {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="auth-container">
    <img src="./assets/images/logo-twitter.png" alt="Logo Mini Twitter" class="logo" />
      <h2>Twitter</h2>
      
      <div class="form-group">
        <h3>Entrar</h3>
        <form id="loginForm">
          <input type="email" id="loginEmail" placeholder="Email" required />
          <input type="password" id="loginSenha" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
      </div>
      <div><p>ou</p></div>
      <div class="form-group">
        <h3>Criar conta</h3>
        <form id="registerForm">
          <input type="text" id="registerNome" placeholder="Nome de usuário" required />
          <input type="email" id="registerEmail" placeholder="Email" required />
          <input type="password" id="registerSenha" placeholder="Senha" required />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  `;

  document.getElementById("loginForm").addEventListener("submit", onSubmitLogin);
  document.getElementById("registerForm").addEventListener("submit", onSubmitRegister);
}
