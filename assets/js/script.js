const menuButton = document.querySelector('.menu');
const navLinks = document.querySelector('.navlinks');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => navLinks.classList.toggle('open'));
}
document.querySelectorAll('.navlinks a').forEach(a => a.addEventListener('click', () => navLinks?.classList.remove('open')));
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
document.querySelectorAll('[data-demo-form]').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault(); alert('Thanks for your message! Connect this form to a backend to receive inquiries.'); form.reset();
}));
