// Navigation
const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('.navlinks');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.navlinks a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Page information
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Demo contact form
document.querySelectorAll('[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert(
      'Thanks for your message! Connect this form to a backend to receive inquiries.'
    );

    form.reset();
  });
});
