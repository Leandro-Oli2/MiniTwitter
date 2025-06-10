// Arquivo principal da aplicação: decide entre autenticação e feed com base no token
import { initAuth } from "./controllers/authController.js";
import { renderFeed } from "./controllers/feedController.js";
import { renderProfile } from "./controllers/profileController.js";

const token = localStorage.getItem("token");

async function main() {
  if (!token) {
    initAuth();
  } else {
    await renderFeed();

    const profileBtn = document.getElementById("profileBtn");
    if (profileBtn) {
      profileBtn.addEventListener("click", async () => {
        await renderProfile();
      });
    }

    const backToFeedBtn = document.getElementById("backToFeedBtn");
    if (backToFeedBtn) {
      backToFeedBtn.addEventListener("click", async () => {
        await renderFeed();
      });
    }
  }
}

main();
