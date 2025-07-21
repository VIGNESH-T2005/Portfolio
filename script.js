document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
  e.target.reset();
});



 document.addEventListener('DOMContentLoaded', function () {
        const toggle = document.getElementById('mobile-nav-toggle');
        const menu = document.getElementById('mobile-nav-menu');
        if (toggle && menu) {
          toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            menu.classList.toggle('opacity-0');
            menu.classList.toggle('pointer-events-none');
          });
          document.addEventListener('click', function () {
            menu.classList.add('opacity-0');
            menu.classList.add('pointer-events-none');
          });
          menu.addEventListener('click', function (e) {
            e.stopPropagation();
          });
        }
      });

  const menu = document.getElementById('mobile-nav-menu');
  const backdrop = document.getElementById('mobile-backdrop');
  const menuToggleBtn = document.getElementById('mobile-nav-toggle');
  const menuCloseBtn = document.getElementById('mobile-menu-close');

  function openMobileMenu() {
    menu.classList.remove('-translate-x-full', 'opacity-0', 'pointer-events-none');
    menu.classList.add('translate-x-0', 'opacity-100');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function closeMobileMenu() {
    menu.classList.add('-translate-x-full', 'opacity-0', 'pointer-events-none');
    menu.classList.remove('translate-x-0', 'opacity-100');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100');
    document.body.style.overflow = ''; // restore scroll
  }

  // Hamburger opens menu
  if (menuToggleBtn) menuToggleBtn.addEventListener('click', openMobileMenu);
  // Close button and clicking overlay close menu
  menuCloseBtn.addEventListener('click', closeMobileMenu);
  backdrop.addEventListener('click', closeMobileMenu);