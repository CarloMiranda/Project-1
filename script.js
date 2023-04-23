
const buttons = document.querySelector('.buttons');
const panels = document.querySelectorAll('.panel');
buttons.addEventListener('click', handleClick);
function handleClick(e) {
  if (e.target.matches('button')) {
    panels.forEach(panel => panel.classList.remove('show'));
    const { id } = e.target.dataset;
    const selector = `.panel[id="${id}"]`;
    document.querySelector(selector).classList.add('show');
  }
}

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        document.getElementById('menu-top').classList.add('fixed-top');
        menu_height = document.querySelector('.menu').offsetHeight;
        document.body.style.paddingTop = menu_height + 'px';
      } else {
        document.getElementById('menu-top').classList.remove('fixed-top');
        document.body.style.paddingTop = '200';
      } 
  });
});