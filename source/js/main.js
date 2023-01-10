const toggleButtons = document.querySelectorAll('.js-button');

toggleButtons.forEach(button => {
  button.onclick = () => {
    const target = button.previousElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    target.hidden = expanded;
  }
});