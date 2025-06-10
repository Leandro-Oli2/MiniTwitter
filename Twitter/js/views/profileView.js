export function renderProfileView(usuario, posts, onBack, onUpdate) {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="profile-container">
      <header>
        <h2>Perfil de @${usuario.username}</h2>
        <button id="backBtn">Voltar</button>
      </header>

      <section class="user-info">
        <form id="editForm">
          <label for="username">Nome de usuário:</label>
          <input type="text" id="username" value="${usuario.username}" required />
          
          <label for="email">Email:</label>
          <input type="email" id="email" value="${usuario.email}" required />
          
          <button type="submit">Salvar Alterações</button>
        </form>
      </section>

      <section class="user-posts">
        <h3>Minhas Postagens</h3>
        ${
          posts.length > 0
            ? posts
                .map(
                  post => `
            <div class="post">
              <p>${post.content}</p>
              <span>${new Date(post.createdAt).toLocaleString()}</span>
            </div>
          `
                )
                .join("")
            : "<p>Você ainda não postou nada.</p>"
        }
      </section>
    </div>
  `;

  document.getElementById("backBtn").addEventListener("click", onBack);
  document.getElementById("editForm").addEventListener("submit", onUpdate);

}
