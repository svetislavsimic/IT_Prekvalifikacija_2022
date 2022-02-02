function formatedNumber(num) {
  if (num <= 9) {
    return "0" + String(num);
  } else {
    return String(num);
  }
}

function datum(dan, mesec, godina) {
  console.log(
    formatedNumber(dan) + "." + formatedNumber(mesec) + "." + String(godina)
  );
}

//zadatak: napisati funkciju koja vraca procenat nekog broja npr: procenat(70,4)
//procenat % = 1/100 : 70 * 4 * 1/100
function procenat(broj, proc) {
  {
    return (broj / 100) * proc;
  }
}
//zadatak : napisati funkciju koja vraca koliko procenata zlata
//ima u zadatoj vrednosti u karatima
//1 karat = 4.2%
function procenatZlata(karat) {
  return karat * 4.2;
}
//zadatak: napisati funkciju koja vraca koliko grama zlata
//se nalazi u nekom nakitu za koji znamo koliko ima karata i njegovu masu
function samoZlato(masaNakita, karat) {
  return procenat(masaNakita, procenatZlata(karat));
}

//zadatak: napisati funkciju koja pretvara km u milje
function kmUMilje(km) {
  return 0.621371192 * km;
}

//zadatak: napisati funkciju koja za vraca da li je rec palindrom
function palindrom(rec) {
  let rev = rec.split("").reverse().join("");
  return rec == rev;
}

//NIZOVI!!
/*
Operacije sa nizovima

Dohvatanje odredjenog elementa niza:
let prvi = voce[0]; 
Indeksi su “zero based”, znaci prvi element u nizu ima indeks 0 a ne 1..
let drugi = voce[1]; 

Dodavanje novog elements na kraju niza
let novaDuzina = voce.push(“pomorandza”);
Ovde je zgodno da vidimo da metod push vraca koliko je elemenata u nizu (duzina niza) nakon dodavanja novog elementa a efekat je da se sad i “pomorandza” nalazi u nizu voce. 

Dodavanje novog elementa na pocetku niza
let novaDuzina = voce.unshift(“visnja”);

Izbacivanje poslednjeg elementa iz niza

let poslednji = voce.pop();

Izbacivanje prvog elementa iz niza

let prvi = voce.shift();

Pronalazenje indeksa nekog elementa u nizu

let pozicija = voce.indexOf(“kruska”);

Izbacivanje niza  elmenata od zadatog indeksa iz niza sa odredjenom duzinom

let izbaceniElement = voce.splice(2,3);
Prvi broj - 2 , odredjuje od kog indeksa zelimo da pocnemo sa izbacivanjem, drugi broj - 3 , odredjuje koliko elemenata izbacujemo.

*/
let oceneMatematika = new Array(3, 4, 2, 5);
console.log(oceneMatematika);
