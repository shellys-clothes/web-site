// js/main.js
console.log("Shelly's Clothes inicializado ✨");

  // Mobile menu toggle com animação
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('shelly-nav');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    nav.classList.toggle('show');
  });