// Função responsável por renderizar a tela do feed de postagens
export function renderFeedView(usuario, onPostSubmit) {
  const app = document.getElementById("app");

  // Define o HTML principal do feed
  app.innerHTML = `
    <div class="feed-container">
      <header>
        <h2>Bem-vindo, @${usuario.username}</h2>
        <div>
          <button id="profileBtn">Meu Perfil</button>
          <button id="logoutBtn">Sair</button>
        </div>
      </header>

      <section class="new-post">
        <form id="postForm">
          <textarea id="postContent" maxlength="280" placeholder="O que está acontecendo?"></textarea>
          <button type="submit">Publicar</button>
        </form>
      </section>

      <section class="posts" id="postsContainer"></section>
    </div>
  `;

  // Evento de envio de nova postagem
  document.getElementById("postForm").addEventListener("submit", onPostSubmit);

  // Evento de logout
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });

}