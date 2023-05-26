function polaNumber(N, arr = [[]], i = 0, j = 0) {
  if (N % 2 === 0) {
    console.log("Harus Bilangan Ganjil");
  } else {
    if (i >= N) {
      arr.forEach((a) => console.log(...a));
      return;
    }

    if (j >= N) {
      if (i < N - 1) {
        arr[i + 1] = [];
      }
      polaNumber(N, arr, i + 1, 0);
      return;
    }

    if (i == 0 || j == 0 || i == N - 1 || j == N - 1 || i + j == N - 1) {
      arr[i][j] = "X";
    } else {
      arr[i][j] = "0";
    }

    return polaNumber(N, arr, i, j + 1);
  }
}

polaNumber(5);
console.log("\n");
polaNumber(3);
console.log("\n");
polaNumber(7);
console.log("\n");
polaNumber(2);
