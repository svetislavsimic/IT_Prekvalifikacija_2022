//FOR petlja
// console.log("Zdravo svima!");
// console.log("Zdravo svima!");
// console.log("Zdravo svima!");
// console.log("Zdravo svima!");
// console.log("Zdravo svima!");

for (let i = 1; i <= 0; i++) {
  console.log(`FOR: Zdravo svima ${i}-ti put!`);
}
console.log("Izasao sam iz petlje");

let imena = ["Ivan", "Dejan", "Milan", "Katarina", "Pavel", "Ana", "Filip"];
// console.log(`Zdravo ${imena[0]}`);
// console.log(`Zdravo ${imena[1]}`);
// console.log(`Zdravo ${imena[2]}`);
// console.log(`Zdravo ${imena[3]}`);
// console.log(`Zdravo ${imena[4]}`);
// console.log(`Zdravo ${imena[5]}`);
for (let i = 0; i < imena.length; i++) {
  console.log(`Zdravo ${imena[i]} iz FOR-a`);
}
//napisati funkciju koja sabira sve elemente nekog niza
// brojevi = [1,4,2,3]
// [-1,3,4,8,9]
//suma(brojevi) da mi vrati 10
function suma(nizBrojeva) {
  console.log("TRALALALLALALALA!");
  let sumaBrojeva = 0;
  console.log(nizBrojeva);
  for (let i = 0; i < nizBrojeva.length; i++) {
    sumaBrojeva = sumaBrojeva + nizBrojeva[i];
    console.log(`Sada je suma ${sumaBrojeva}`);
  }
  return sumaBrojeva;
}
console.log("************");
let brojevi = [1, 4, 2, 3];
suma(brojevi);
//napiosati funkciju koja vraca proizvod evih elemenata nekog niza brojeva
