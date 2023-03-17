addEventListener("load", init);
const LISTA = [
  "./kepek/1.jpg",
  "./kepek/2.jpg",
  "./kepek/3.jpg",
  "./kepek/4.jpg",
  "./kepek/5.jpg",
];

// const KEPLISTA = document.querySelectorAll(".kepek img");

function init() {
  kepekbetolt();
  kiskepkatt();
  gomb();
}

function kepekbetolt() {
  const ELEM = document.querySelector("article"); //querrySelectorAll - listába rakja
  // document.getElementsByTagName("article")
  for (let index = 0; index < LISTA.length; index++) {
    const fileName = LISTA[index].split("/").pop(); // csak a fájlnevet használjuk fel
    ELEM.innerHTML += `<div class="kepek"><img src="${LISTA[index]}" alt="${fileName}"></div>`;
    console.log(fileName)
  }
  
}

function kiskepkatt() {
  const KEPLISTA = document.querySelectorAll(".kepek img");

  for (let index = 0; index < KEPLISTA.length; index++) {
    KEPLISTA[index].addEventListener("click", function () {
      kepbehelyez(index);
    });
  }
}

function kepbehelyez(index) {
  const nagyKep = document.querySelector(".nagykep img");
  console.log(nagyKep.src);
  nagyKep.src = LISTA[index];
}

function gomb() {
  let gombok = document.querySelectorAll("button");
  let bal = gombok[0];
  let jobb = gombok[1];
  bal.addEventListener("click", elozo);
  jobb.addEventListener("click", kovetkezo);
}

function elozo() {
  let nagyKep = document.querySelector(".nagykep img")
  for (let i = 4; i >= 0; i--) {
    if (nagyKep.alt == LISTA[i].split("/").pop()) {
      if (i == 0) {
        nagyKep.alt = LISTA[4].split("/").pop()
        nagyKep.src = LISTA[4]
      } else {
        nagyKep.alt = LISTA[i - 1].split("/").pop()
        nagyKep.src= LISTA[i - 1]
      }
      break
    }
  }
}

function kovetkezo() {
  let nagyKep = document.querySelector(".nagykep img")

  for (let i = 0; i < LISTA.length; i++) {
    if (nagyKep.alt == LISTA[i].split("/").pop()) {
      if (i == LISTA.length - 1) {
        nagyKep.alt = LISTA[0].split("/").pop()
        nagyKep.src = LISTA[0]
      } else {
        nagyKep.alt = LISTA[i + 1].split("/").pop()
        nagyKep.src= LISTA[i + 1]
      }
      break
    }
  }
}
