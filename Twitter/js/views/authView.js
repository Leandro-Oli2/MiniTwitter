// Função responsável por renderizar o formulário de login e cadastro
export function renderLoginAndRegisterForm(onSubmitLogin, onSubmitRegister) {
  const app = document.getElementById("app");

  // Define o HTML da interface de autenticação (login e cadastro)
  app.innerHTML = `
    <div class="auth-container">
      <!-- Logo e título -->
      <img src="./assets/images/logo-twitter.png" alt="Logo Mini Twitter" class="logo" />
      <h2>Twitter</h2>
      
      <!-- Formulário de login -->
      <div class="form-group">
        <h3>Entrar</h3>
        <form id="loginForm">
          <input type="email" id="loginEmail" placeholder="Email" required />
          <input type="password" id="loginSenha" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
      </div>

      <div><p>ou</p></div>

      <!-- Formulário de cadastro -->
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

  // Adiciona os eventlisteners para os formulários
  document.getElementById("loginForm").addEventListener("submit", onSubmitLogin);
  document.getElementById("registerForm").addEventListener("submit", onSubmitRegister);
}
