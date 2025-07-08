document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
  e.target.reset();
});
