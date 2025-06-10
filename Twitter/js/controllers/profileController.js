// Controller responsável por carregar e atualizar o perfil do usuário
import { renderProfileView } from "../views/profileView.js";
import { getUserPosts } from "../repositories/postRepository.js";
import { updateProfile } from "../repositories/profileRepository.js";
import { renderFeed } from "./feedController.js"; 


export async function renderProfile() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  try {
    const posts = await getUserPosts(); 
    renderProfileView(usuario, posts, renderFeed, handleUpdate);
  } catch (err) {
    console.error("Erro ao carregar perfil:", err);
    alert("Erro ao carregar perfil");
  }
}


async function handleUpdate(event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!username || !email) {
    alert("Preencha todos os campos.");
    return;
  }

  try {
    const data = await updateProfile(username, email);
    alert("Perfil atualizado com sucesso!");
    localStorage.setItem("usuario", JSON.stringify(data.user));
    location.reload();
  } catch (error) {
    alert(error.message);
  }
}
