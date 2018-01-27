const onPanelClick = ev => {
  ev.target.classList.toggle('open');
  ev.target.classList.toggle('open-active');
};

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', onPanelClick));