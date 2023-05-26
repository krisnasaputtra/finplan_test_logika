const N = 13;
const list = [];
let angka = 1;

while (list.length < N) {
  if (angka % 3 == 0 && angka % 7 == 0) {
    list.push("Z");
  } else if (angka % 3 == 0 || angka % 7 == 0) {
    list.push(angka);
  }

  angka++;
}

console.log(list.toString());
