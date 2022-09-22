function darklightmode() {
    var element = document.body;
    element.classList.toggle("dmode");
}
function themeToggle(e) {
  let txt = e.innerText;
  e.innerText = txt == 'light_mode' ? 'dark_mode' : 'light_mode';
}
