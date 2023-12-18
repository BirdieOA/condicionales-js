const NOMBRE = "brendan";
const APELLIDO = "eich";
const EMPRESA1 = "netscape";
const EMPRESA2 = "brave";

document.querySelector(".boton").addEventListener("click", leer);

function leer() {
  const CAMPO1 = document.querySelector("#nombre").value.trim().toLowerCase();
  const CAMPO2 = document.querySelector("#apellido").value.trim().toLowerCase();
  const CAMPO3 = document.querySelector("#empresa").value.trim().toLowerCase();

  if (
    CAMPO1 === NOMBRE &&
    CAMPO2 === APELLIDO &&
    (CAMPO3 === EMPRESA1 || CAMPO3 === EMPRESA2)
  ) {
    document.querySelector(".caja2").innerHTML = "Hola";
  } else {
    document.querySelector(".caja2").innerHTML = "Adios";
  }
}
