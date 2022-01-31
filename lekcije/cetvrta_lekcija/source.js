/*
Function declaration
function cakeCreator(chocolates, apples, strawberries){
const cake = “Cake with ${chocolates} chocolates, ${apples} apples and ${strawberries} strawberries.”;
console.log(cake);
return cake;
}

Function expression
const cakeCreator = function(chocolates, apples, strawberries){
const cake = “Cake with ${chocolates} chocolates, ${apples} apples and ${strawberries} strawberries.”;
console.log(cake);
return cake;
}

Arrow function
const grossSallary = netoSalary => {
const maxTaxed = 250000;
If (netoSalary>maxTaxed)
{ return maxTaxed*1,65 + (netoSalary-maxTaxed)*1.1}
else
{
return netoSalary*1,65;
}

*/

function cakeCreator(chocolates, apples, strawberries) {
  const cake = `Cake with ${chocolates} chocolates, ${apples} apples and ${strawberries} strawberries.`;
  console.log(cake);
  return cake;
}

//mala fabrika ...
let plata = 1000;

function izracunajBrutoPlatu(netoPlata) {
  let brutoPlata;
  const poreskaOsnova = 240000;
  const bruto1Koeficijent = 1.1;
  const bruto2Koeficijent = 1.58;
  if (netoPlata > poreskaOsnova) {
    brutoPlata =
      (netoPlata - poreskaOsnova) * bruto1Koeficijent +
      poreskaOsnova * bruto2Koeficijent;
  } else {
    brutoPlata = netoPlata * bruto2Koeficijent;
  }
  return brutoPlata;
}

function cakeCreator(chocolates, apples, strawberries) {
  const cake = `Cake with ${chocolates} chocolates, ${apples} apples and ${strawberries} strawberries.`;
  console.log(cake);
  return cake;
}

const cakeCreator2 = function (chocolates, apples, strawberries) {
  const cake = `Cake with ${chocolates} chocolates, ${apples} apples and ${strawberries} strawberries.`;
  console.log(cake);
  return cake;
};

const grossSallary = (netoSalary) => {
  const maxTaxed = 250000;
  if (netoSalary > maxTaxed) {
    return maxTaxed * 1, 65 + (netoSalary - maxTaxed) * 1.1;
  } else {
    return netoSalary * 1, 65;
  }
};

//definisati funkciju koja za zadati broj vraca koji je to dan u nedelji, npr za 1 vraca "ponedeljak"

const danUNedelji = function (redniBroj) {
  switch (redniBroj) {
    case 1:
      return "Ponedeljak";
    case 2:
      return "Utorak";
    case 3:
      return "Sreda";
    case 4:
      return "Cetvrtak";
    case 5:
      return "Petak";
    case 6:
      return "Subota";
    case 7:
      return "Nedelja";
    default:
      return "Pogresan unos!";
  }
};
//funkcija vraca povrsinu pravilnog trougla ili kvadrata
function povrsina(figura, dimenzija) {
  if (figura == "TROUGAO") {
    return (dimenzija ** 2 * 1.73) / 4;
  } else if (figura == "KVADRAT") {
    return dimenzija ** 2;
  } else {
    return "Nepoznat ulaz";
  }
}
