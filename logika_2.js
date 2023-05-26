const hasil = [];

function searchKata(kalimat) {
  kalimat
    .toLowerCase()
    .match(/sang gajah/g)
    .map((x) => hasil.push(x));
  kalimat
    .toLowerCase()
    .match(/serigala/g)
    .map((x) => hasil.push(x));
  kalimat
    .toLowerCase()
    .match(/harimau/g)
    .map((x) => hasil.push(x));

  return hasil.join(" - ");
}

const kalimat = "Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah";
console.log(searchKata(kalimat));
