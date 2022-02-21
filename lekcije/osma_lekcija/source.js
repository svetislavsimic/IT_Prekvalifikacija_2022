"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const sima = ["Svetislav", "Simic", 1977, true];
// const branka = ["Bjelica", "Branka", 1995, false];
// const osoba = ["Milic", "Vukasinovic", 1960, true];
// const siminiPrijatelji = ["Nenad", "Filip", "Vildana"];
// console.log(sima[0]);
// console.log(branka[1]);
// const simaObjekat = {ime:"Svetislav"};
// console.log(simaObjekat.ime);
const sima = { ime: "Svetislav", prezime: "Simic", godiste: 1977 };
const nesa = { prezime: "Petrovic", ime: "Nenad", godiste: 1983 };
// console.log(nesa.ime);
// console.log(nesa["ime"]);

// const podatak = prompt("Sta zelis da saznas o Simi? ime, prezime, godiste");
// alert(sima[podatak]);
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

// let artikal = prompt("Sta zelite da kupite?");
// let broj = Number(prompt("Koliko zelite?"));
let sik = staIKoliko();
//tezga[artikal]--;
//obradiObjekat(tezga, artikal, broj);
obradiObjekat(tezga, sik["sta"], sik["koliko"]);
console.log(tezga);
const prodavnica = { zvucnik: 6, slusalice: 9 };
prodavnica["slusalice"];
// artikal = prompt("Sta zelite da kupite?");
// broj = Number(prompt("Koliko zelite?"));
console.log(prodavnica);
sik = staIKoliko();
//obradiObjekat(prodavnica, artikal, broj);
obradiObjekat(prodavnica, sik["sta"], sik["koliko"]);
console.log(prodavnica);
///////////////////
function absTwo(broj1, broj2) {
  if (broj1 > broj2) {
    return broj1 - broj2;
  } else {
    return broj2 - broj1;
  }
}

let simaVisina = Number(prompt("Koliko si ti Simo visok?"));

let nenadVisina = Number(prompt("Koliko si ti Nenade visok?"));
let razlikaUVisini = absTwo(simaVisina, nenadVisina);
// if (simaVisina > nenadVisina) {
//   razlikaUVisini = simaVisina - nenadVisina;
// } else {
//   razlikaUVisini = nenadVisina - simaVisina;
// }
alert(`Razlika izmedju vas dvojice u visini je ${razlikaUVisini}`);

let simaMasa = Number(prompt("Koliko si ti Simo tezak?"));
let nenadMasa = Number(prompt("Koliko si ti Nenade tezak?"));

let razlikaUMasi = absTwo(simaMasa, nenadMasa);
// if (simaMasa > nenadMasa) {
//   razlikaUMasi = simaMasa - nenadMasa;
// } else {
//   razlikaUMasi = nenadMasa - simaMasa;
// }
const pera = {
  godiste: 2000,
  starost: function (god) {
    if (god - this.godiste > 10) {
      console.log(`Godina je ${god}`);
      return this.starost(god - 1);
    } else {
      console.log("Sada mozemo da se vratimo iz rekurzije");
      return god - this.godiste;
    }
  },
};

console.log(pera.starost(2015));

const dani = ["Ponedeljak", "Utorak", "Sreda", "Cetvrtak", "Petak"];
let dan = dani[2];
