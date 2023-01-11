const toggleButtons = document.querySelectorAll('.js-button');

const switchButtonLabel = (labels) => {
  for (const label of labels) {
    const isHidden = label.hidden;
    label.hidden = !isHidden;
  }
}

toggleButtons.forEach(button => {
  button.onclick = () => {
    const target = button.parentElement.previousElementSibling.querySelector('.js-collapsible');
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    target.hidden = expanded;
    
    switchButtonLabel(button.children);
  }
});