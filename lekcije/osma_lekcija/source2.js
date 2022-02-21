"use strict";
/*const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
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
*/
/*
Stringovi imaju dosta metoda koje mozemo da upotrebimo da bismo manipulisali sa njima. Uzmimo na primer da zelimo da saznamo da li neki string pocinje sa karakterom “A”. To mozemo da uradimo sa metodom string.startsWith(substring [, position]) na sledeci nacin:
let planina = ‘Avala’;
planina.startsWith(“A”) vraca true. Ako bi naziv planine bio:
planina=”Kopaonik”;
planina.startsWith(“K”) bi vratilo false. Mozemo da zadamo i drugi parametar, position, tj od kog mesta trazimo poklapanje string i prvog parametra metode startsWith. Primeri:
let firma = “Centar za IT edukaciju”;
firma.startsWith(“ent”, 1) vraca true, firma.startsWith(“ent”, 2) vraca false.
Sledeci metod koji je jako koristan je string.toLowerCase() koji vraca string ali sva slova prevodi u “mala”. Primer:
let planina = ‘Avala’;
let planinaMalimSlovima = planina.toLowerCase();
Sada je vrednost promenljive planinaMalimSlovima:  “avala”.
Za dobijanje stringa sa svim velikim slovima koristimo string.toUpperCase(). 
Za dobijanje stringa bez “belih znakova” na pocetku i kraju koristimo string.trim(). 
Ako zelimo da dobijemo niz koji smo dobili deljenjem polaznog stringa na manje stringove ali tako sto za delenje koristimo koristimo odredjeni separator, koristimo metod string.split(separator) . Npr:
let text = “Ana voli Milovana”
let reci= text.split() 
U promenljivoj reci se nalazi niz [“Ana”, “vol”,  “Milovana”] . Predefinisani separator je space. 
U sledecem primeru koristicemo separator “,” :
let text = “Jesen je, lisce opada, dolazi zima”
let reci= text.split() 
Sada je u promenljivoj reci niz : [“Jesen je”,” lisce opada”,” dolazi zima”]
Za dohvatanje karaktera u stringu na odredjenom mestu (indeksu), koristimo metodu string.charAt(index)
let text = “banana”;
let prvoSlovo = text.charAt(0);
let drugoSlovo = text.charAt(1);

*/
//startsWith(“A”)
const ime = "Pera";
ime.startsWith("P");
//Zadatak: napisati funkciju koja imitira filter element
// funkcija prima filter - niz stringova, i zadati string koji se trazi
function filtriranje(nizStringova, kljucnaRec) {
  // nizStringova = ["Pera", "Marko", "Petar", "Masa"]
  //kljucnaRec = "Pe"
  //vraca: ["Pera", "Petar"]
  let filtriraniNiz = [];
  for (let i = 0; i < nizStringova.length; i++) {
    if (nizStringova[i].startsWith(kljucnaRec)) {
      filtriraniNiz.push(nizStringova[i]);
    }
  }
  return filtriraniNiz;
}

let nizImena = ["Pera", "Marko", "Petar", "Masa"];
console.log(filtriranje(nizImena, "Pe"));

//split
//Zadatak: Iz recenice koja se sastoji samo od slova i
//razmaka izdvojiti samo one reci koje pocinju sa a
const recenica = "juce je padala kisa a ja sam bio na avali";
const reci = recenica.split(" ");
const reciNaA = filtriranje(reci, "a");
console.log(reciNaA);

console.log("Testiranje funkcije filtriranje");
console.log(
  JSON.stringify(filtriranje(["Pera", "Mika", "Petar"], "Pe")) ==
    JSON.stringify(["Pera", "Petar"])
);
console.log(
  JSON.stringify(filtriranje(["Pera", "Mika", "Petar"], "pe")) ==
    JSON.stringify([])
);
console.log(
  JSON.stringify(filtriranje(["Pera", "Mika", "Petar"], "Tr")) ==
    JSON.stringify([])
);
console.log("Kraj testiranja filtriranje");

// const recenicaa = prompt("Unesite rečenicu");
// const kljucnaRec = prompt("Unesite zeljeni pocetak reci");
let poPrvomSlovu = function (recenica, pocetakReci) {
  const nizReci = recenica.split(" ");
  const reciNa = filtriranje(nizReci, pocetakReci);
  return reciNa;
};
//console.log(poPrvomSlovu(recenicaa, kljucnaRec));
console.log("Testiranje poPrvomSlovu");
console.log(
  JSON.stringify(poPrvomSlovu("Triglav je planina i Troglav", "Tr")) ==
    JSON.stringify(["Triglav", "Troglav"])
);
console.log("kraj testiranja poPrvomSlovu");
//toLowerCase
function filtriranje2(nizStringova, kljucnaRec) {
  //nizStringova=["Pera", "Mika", "Persa"];
  // Tr tr TR tR Tri TRI TRi
  const kljucnaRecMala = kljucnaRec.toLowerCase();
  let filtriraniNiz = [];
  for (let i = 0; i < nizStringova.length; i++) {
    if (nizStringova[i].toLowerCase().startsWith(kljucnaRecMala)) {
      filtriraniNiz.push(nizStringova[i]);
    }
  }
  return filtriraniNiz;
}
console.log("Testiranje filtriranje2");
console.log(
  JSON.stringify(
    filtriranje2(["Triglav", "je", "planina", "i", "troglav"], "tr")
  ) == JSON.stringify(["Triglav", "troglav"])
);
console.log(
  JSON.stringify(
    filtriranje2(["Triglav", "je", "planina", "i", "troglav"], "Tr")
  ) == JSON.stringify(["Triglav", "troglav"])
);
console.log("kraj testiranja filtriranje2");

function poPrvomSlovu2(recenicaa, pocetakReci) {
  //recenicaa = "Ana voli Andreja i slusa antrax"
  //pocetakReci = "AN"
  //return value: ["Ana", "Andreja", "antrax"]
  return filtriranje2(recenicaa.split(" "), pocetakReci);
}
console.log(poPrvomSlovu2("Ana voli Andreja i slusa antrax", "AN"));
console.log("Testiranje poPrvomSlovu2");
console.log(
  JSON.stringify(poPrvomSlovu2("Ana voli Andreja i slusa antrax", "AN")) ==
    JSON.stringify(["Ana", "Andreja", "antrax"])
);
console.log(
  JSON.stringify(poPrvomSlovu2("trava raste kisa pada", "pp")) ==
    JSON.stringify([])
);
console.log("kraj testiranja poPrvomSlovu2");

//zadatak: da odredimo na kom se mestu u stringu nalazi zadati string
//primer : "avala je planina" i zadati string je "a"
// [0,2,4,11,15]
const zadatiString = "avala je planina";
const zadatiKarakter = "a";
const nizIndeksa = [];
for (let i = 0; i < zadatiString.length; i++) {
  if (zadatiString.charAt(i) == zadatiKarakter) {
    nizIndeksa.push(i);
  }
}
console.log(nizIndeksa);
