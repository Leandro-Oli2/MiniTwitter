const API_BASE = "https://mini-twitter-api-vy9q.onrender.com/api";

export async function createPost(content) {
  const token = localStorage.getItem("token");  // pegar token aqui

  const response = await fetch(`${API_BASE}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ content })
  });

  if (!response.ok) {
    throw new Error("Erro ao criar postagem.");
  }

  return await response.json();
}

export async function getAllPosts() {
  const token = localStorage.getItem("token");  // pegar token aqui

  const response = await fetch(`${API_BASE}/posts`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar postagens.");
  }

  return await response.json();
}

export async function getUserPosts() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE}/posts/my-posts`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar postagens do usuário.");
  }

  return await response.json();
}
