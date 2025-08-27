function invertendoString(string) {
  string.replace(/[^a-zA-Z0-9]/g, "");
  let stringInvertido = string.split("").reverse().join("");
  console.log(stringInvertido);
  if (string == stringInvertido) {
    console.log("A string é um palíndromo");
  } else {
    console.log("A string não é um palíndromo");
  }
  return string == stringInvertido;
}

console.log(invertendoString(" ")); // altere a string nos " " para testar um palíndromo
