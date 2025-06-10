export function renderFeedView(usuario, onPostSubmit) {
  const app = document.getElementById("app");
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

  document.getElementById("postForm").addEventListener("submit", onPostSubmit);
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}
