// Função responsável por renderizar a tela de perfil do usuário
export function renderProfileView(usuario, posts, onBack, onUpdate) {
  const app = document.getElementById("app");

  // Substitui o conteúdo da div principal pelo HTML do perfil
  app.innerHTML = `
    <div class="profile-container">
      <header>
        <h2>Perfil de @${usuario.username}</h2>
        <button id="backBtn">Voltar</button> <!-- Botão para voltar -->
      </header>

      <section class="user-info">
        <form id="editForm">
          <label for="username">Nome de usuário:</label>
          <input type="text" id="username" value="${usuario.username}" required />
          
          <label for="email">Email:</label>
          <input type="email" id="email" value="${usuario.email}" required />
          
          <button type="submit">Salvar Alterações</button> <!-- Envia os dados atualizados -->
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

  // Eventos: clique no botão de voltar e envio do formulário de edição
  document.getElementById("backBtn").addEventListener("click", onBack);
  document.getElementById("editForm").addEventListener("submit", onUpdate);
}
