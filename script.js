// Adiciona classe "scrolled" no header ao rolar para mudar o background
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if(window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Animação das seções quando aparecem na tela
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // anima só uma vez
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});