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