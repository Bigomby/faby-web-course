function suma(sumando1, sumando2) {
  if (typeof sumando1 !== "number") {
    throw "Sumando 1 no es number";
  }
  if (typeof sumando2 !== "number") {
    throw "Sumando 2 no es number";
  }

  return sumando1 + sumando2;
}

const submitButton = document.querySelector("#submit-button");

submitButton.onclick = function(event) {
  event.preventDefault();

  const sumando1 = parseInt(document.querySelector("#sumando1").value);
  const sumando2 = parseInt(document.querySelector("#sumando2").value);

  const resultado = suma(sumando1, sumando2);
  document.getElementById("result").innerHTML = resultado;
};
