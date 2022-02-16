"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const sima = { ime: "Svetislav", prezime: "Simic", godiste: 1977 };
const nesa = { prezime: "Petrovic", ime: "Nenad", godiste: 1983 };
//zadatak: definisati objekat tezga koji opisuje stanje na pijacnoj tezgi
//gde imamo 4 jabuke, 5 limunova i 6 banana.
function obradiObjekat(objekat, atribut, kolicina) {
  if (objekat[atribut] >= kolicina) {
    objekat[atribut] = objekat[atribut] - kolicina;
  } else {
    alert(`Nema dovoljno ${atribut}`);
  }
}

const tezga = { jabuke: 4, limunovi: 5, banana: 6 };
console.log(tezga);

function staIKoliko() {
  let artikal = prompt("Sta zelite da kupite?");
  let broj = Number(prompt("Koliko zelite?"));
  return { sta: artikal, koliko: broj };
}

let sik = staIKoliko();
obradiObjekat(tezga, sik["sta"], sik["koliko"]);
console.log(tezga);
const prodavnica = { zvucnik: 6, slusalice: 9 };
prodavnica["slusalice"];
console.log(prodavnica);
sik = staIKoliko();
obradiObjekat(prodavnica, sik["sta"], sik["koliko"]);
console.log(prodavnica);
