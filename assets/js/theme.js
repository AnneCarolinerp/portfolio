document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  // recuperar tema salvo
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    toggleBtn.textContent = '🌙';
    toggleBtn.setAttribute('data-tooltip', 'Ativar modo escuro');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    const isLight = body.classList.contains('light-mode');

    toggleBtn.textContent = isLight ? '🌙' : '☀️';
    toggleBtn.setAttribute(
      'data-tooltip',
      isLight ? 'Ativar modo escuro' : 'Ativar modo claro'
    );

    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
});