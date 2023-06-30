let code = document.getElementById("code");
let search_bd = document.getElementById("search-bd");

window.onscroll = () => {
  let a = search_bd.getBoundingClientRect().y;
  if (a <= 0) {
    code.classList.add("convert");
  } else {
    code.classList.remove("convert");
  }
};
