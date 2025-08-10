const navTemplate = document.createElement("template");
navTemplate.innerHTML = `
<ul id="main-nav-items" class="nav-items">
  <li><a href="/">Home</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>
<img class="nav-logo" alt="Logo" src="./assets/lloydborres_logo_dark.svg" />
<button class="nav-menu-button" onclick="toggleMenu()">
  <img alt="Menu" src="./assets/icons/menu.svg" />
</button>
<div class="nav-socials">
  <a
    href="https://github.com/lloydborres"
    target="_blank"
    rel="noopener noreferrer"
    ><img alt="GitHub Profile" src="./assets/icons/github_mark.svg"
  /></a>
</div>
`;

const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<p class="footer-copyright">
  Crafted by Lloyd John Borres using pure HTML, CSS and JavaScript -
  <a
    href="https://github.com/lloydborres/lloydborres.github.io"
    target="_blank"
    rel="noopener noreferrer"
    >View on GitHub</a
  >
  © 2025. All rights reserved.
</p>
<div class="footer-socials">
  <a href="mailto:dev@lloydborres.com" target="_blank" rel="noopener noreferrer"
    ><img alt="Email" src="./assets/icons/mail.svg"
  /></a>
  <a
    href="https://github.com/lloydborres"
    target="_blank"
    rel="noopener noreferrer"
    ><img alt="GitHub Profile" src="./assets/icons/github_mark.svg"
  /></a>
</div>
`;

document.getElementById("main-nav").appendChild(navTemplate.content);
document.getElementById("main-footer").appendChild(footerTemplate.content);

function toggleMenu() {
  const navLinksEl = document.getElementById("main-nav-items");
  navLinksEl.classList.toggle("active");
}
