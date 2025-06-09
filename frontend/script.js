// Smooth scroll para links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, 
        behavior: 'smooth'
      });
    }
  });
});

// Função para animação fadeIn ao scroll
const fadeElements = document.querySelectorAll('section, .card');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener("DOMContentLoaded", function () {
  const texto = "Olá, eu sou o Lucas França. Seja bem-vindo ao meu portfólio! Aqui você encontrará minhas experiências,habilidades e projetos.";
  const typingElement = document.getElementById("typing");
  let index = 0;

  function type() {
    if (index < texto.length) {
      typingElement.innerHTML += texto.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
});