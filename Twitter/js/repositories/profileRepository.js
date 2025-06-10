const API_BASE = "https://mini-twitter-api-vy9q.onrender.com/api";

export async function getProfile() {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_BASE}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar perfil.");
  }

  return await response.json();
}

export async function updateProfile(username, email) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_BASE}/users/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ username, email })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Erro ao atualizar perfil.");
  }

  return await response.json();
}
