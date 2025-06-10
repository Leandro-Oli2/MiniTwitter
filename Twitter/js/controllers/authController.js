// Controller responsável por gerenciar o fluxo de autenticação (login e cadastro)
import { renderLoginAndRegisterForm } from "../views/authView.js";
import { login, register } from "../repositories/userRepository.js";
import { renderFeed } from "./feedController.js"; 

export function initAuth() {
  renderLoginAndRegisterForm(handleLogin, handleRegister);
}

async function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  try {
    const { token, user } = await login(email, senha);
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(user));
    renderFeed(); 
  } catch (error) {
    alert(error.message);
  }
}

async function handleRegister(event) {
  event.preventDefault();
  const nome = document.getElementById("registerNome").value;
  const email = document.getElementById("registerEmail").value;
  const senha = document.getElementById("registerSenha").value;

  try {
    const {token, user} = await register(nome, email, senha);
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(user));
    renderFeed(); 
  } catch (error) {
    alert(error.message);
  }
}
