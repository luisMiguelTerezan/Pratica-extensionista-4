document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-links a');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksList = document.querySelector('.nav-links');

  // Toggle Menu Mobile
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isVisible = navLinksList.style.display === 'flex';
      navLinksList.style.display = isVisible ? 'none' : 'flex';
    });
  }

  // Adiciona a classe active no menu ao scrollar
  const handleScroll = () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      
      // Lógica para página inicial (scroll)
      if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '') {
          if (href === '#' + current || (current === 'inicio' && href === '#inicio')) {
            link.classList.add('active');
          }
      } 
      
      // Lógica para outras páginas (match de URL)
      const path = window.location.pathname;
      if (href !== '/' && href !== '#inicio' && path.includes(href)) {
          link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Inicializa

  // Listener para botões de copiar PIX
  const copyBtn = document.querySelector('.btn-copy-pix');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const pix = "40.654.255/0001-92";
      navigator.clipboard.writeText(pix).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = 'Copiado!';
        setTimeout(() => {
          copyBtn.innerText = originalText;
        }, 2000);
      });
    });
  }

});
