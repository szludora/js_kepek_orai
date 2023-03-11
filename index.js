addEventListener("load", init);
const LISTA = ["kepek/2.jpg", "kepek/3.jpg", "kepek/4.jpg", "/kepek/5.jpg"];

// const KEPLISTA = document.querySelectorAll(".kepek img");

function init() {
  kepekbetolt();
  kiskepkatt();
  gomb();

}

function kepekbetolt() {
  // document.getElementsByTagName("article")
  const ELEM = document.querySelector("article"); //querrySelectorAll - listába rakja
  for (let index = 0; index < LISTA.length; index++) {
    ELEM.innerHTML += `<div class="kepek"><img src="${LISTA[index]}" alt="kep"></div>`;
  }
}

function kiskepkatt() {
    const KEPLISTA = document.querySelectorAll(".kepek img")

  for (let index = 0; index < KEPLISTA.length; index++) {
    KEPLISTA[index].addEventListener("click", function(){
        kepbehelyez(index)
    });
  }
}

function kepbehelyez(index) {
  // let cel = event.target.src;
  // console.log(cel);

  const nagyKep = document.querySelector(".nagykep img");
  nagyKep.src = LISTA[index];
}

function gomb(){
    let gombok = document.querySelectorAll("button")
    let bal = gombok[0];
    let jobb = gombok[1];
    bal.addEventListener("click", elozo);
    jobb.addEventListener("click", kovetkezo);
}

function elozo(){

}

function kovetkezo(){

}