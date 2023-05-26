function checkKataSandi(sandi) {
  if (sandi.split("").length < 8) {
    return "Kata sandi kurang dari 8 karakter";
  } else if (sandi.split("") > 32) {
    return "Kata sandi lebih dari 32 karakter";
  } else if (sandi.search(/[0-9]/g) == 0) {
    return "Kata sandi tidak boleh diawali oleh angka";
  } else if (sandi.search(/[0-9]/g) == -1) {
    return "Kata sandi harus memiliki angka";
  } else if (sandi.search(/[a-z]/g) < 0 || sandi.search(/[A-Z]/g) < 0) {
    return "Kata sandi harus memiliki huruf kecil dan kapital";
  } else {
    return "Kata sandi valid";
  }
}

console.log(checkKataSandi("5andiwara"));
console.log(checkKataSandi("sandiwar4"));
console.log(checkKataSandi("andiSwar4"));
