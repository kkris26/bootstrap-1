const loader = document.querySelector(".container-loader");
function loaderActive() {
  loader.classList.add("loader-active");
}

function loaderActiveTIime(){
    setInterval(loaderActive, 3000);
}

window.onload = loaderActiveTIime();

AOS.init();