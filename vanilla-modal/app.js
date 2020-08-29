const aboutLink = document.querySelector("#about-link"),
  aboutDialog = document.querySelector("#about-dialog"),
  closeAboutLink = document.querySelector("#close-about-link");

function showAboutDialog() {
  aboutDialog.showModal();
}

function closeAboutDialog() {
  aboutDialog.close();
}

aboutLink.addEventListener("click", showAboutDialog);
closeAboutLink.addEventListener("click", closeAboutDialog);
