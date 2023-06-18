const interactiveTexts = document.querySelectorAll('.intro__interactive-text');
const interactiveImages = document.querySelectorAll(
  '.intro__interactive-text__image'
);

interactiveTexts.forEach((interactiveText, idx) => {
  interactiveText.addEventListener('mouseenter', e => {
    interactiveImages[idx].style = 'display:block';
  });
  interactiveText.addEventListener('mouseleave', () => {
    interactiveImages[idx].style = '';
  });
});
