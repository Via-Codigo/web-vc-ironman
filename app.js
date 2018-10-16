/**inicio*/
var menuH = document.getElementById("menuH");
menuH.addEventListener("click", aparecerM);

function aparecerM() {
  var menuA = document.getElementById("menuApa");
  menuA.classList.toggle("menuListo");
}

/**
 * cambiando tamaño de menu
 */
function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 200,
    menuPrincipal = document.getElementById("menuPrincipal"),
    logoTop = document.getElementById("logoTop"),
    itemsMenu = document.getElementsByClassName("itemMenu");

  if (distanceY > shrinkOn) {
    menuPrincipal.classList.add("small");
    logoTop.classList.add("small");
    for (let i = 0; i < itemsMenu.length; i++) {
      itemsMenu[i].classList.add("small");
    }
  } else {
    menuPrincipal.classList.remove("small");
    logoTop.classList.remove("small");
    for (let i = 0; i < itemsMenu.length; i++) {
      itemsMenu[i].classList.remove("small");
    }
  }
}

window.addEventListener("scroll", resizeHeaderOnScroll);
