const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const toast = document.getElementById('toast');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.dataset.item;
    toast.textContent = `${item} added to your order. Call +234 800 123 4567 to complete it.`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
