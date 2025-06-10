// Controller responsável por lidar com a criação e exibição de postagens no feed

import { renderFeedView } from "../views/feedView.js";
import { createPost, getAllPosts } from "../repositories/postRepository.js";

export async function renderFeed() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  
  const app = document.getElementById("app");
  app.innerHTML = `
    <button id="profileBtn">Meu Perfil</button>
    <div id="feedContent"></div>
  `;



  renderFeedView(usuario, handlePostSubmit, document.getElementById("feedContent"));

    document.getElementById("profileBtn").addEventListener("click", () => {
        import("./profileController.js").then(module => module.renderProfile());
    });
  await carregarPostagens();
}


async function handlePostSubmit(event) {
  event.preventDefault();
  const textarea = document.getElementById("postContent");
  const content = textarea.value.trim();
  if (!content) return alert("Digite algo antes de publicar.");

  try {
    await createPost(content);
    textarea.value = "";
    await carregarPostagens();
  } catch (err) {
    alert("Erro ao criar postagem.");
    console.error(err);
  }
}

async function carregarPostagens() {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "<p>Carregando...</p>";

  try {
    const posts = await getAllPosts();
    if (posts.length === 0) {
      container.innerHTML = "<p>Nenhuma postagem encontrada.</p>";
      return;
    }

    const html = posts
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .map(post => `
        <div class="post">
          <strong>@${post.author.username}</strong>
          <p>${post.content}</p>
          <span>${new Date(post.createdAt).toLocaleString()}</span>
        </div>
      `)
      .join("");
    
    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = "<p>Erro ao carregar postagens.</p>";
    console.error(err);
  }
}
