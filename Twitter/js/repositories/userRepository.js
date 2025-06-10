// js/repositories/userRepository.js
const API_BASE = "https://mini-twitter-api-vy9q.onrender.com/api";

export async function login(email, password) {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Credenciais inválidas.");
  }

  return await response.json(); 
}

export async function register(username, email, password) {
  const response = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.message || "Erro ao registrar.");
  }

  return await response.json(); 
}
