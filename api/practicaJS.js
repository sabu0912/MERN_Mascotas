console.log("Hola Mundo");

let a;
let b;

function sumar(a, b) {
  return a + b;
}

console.log(sumar(10, 8));

function saludar(nombre) {
  return `hola ${nombre}`;
}

console.log(saludar("Saul"));

function detectarOperacion(operacion, a, b) {
  //   if (operacion === "sumar") {
  //     return `La operacion es sumar, y el resultado es ${a + b}`;
  //   }
  //   if (operacion === "multiplicar") {
  //     return `La operacion es multiplicar, y el resultado es ${a * b}`;
  //   }
  //   if (operacion === "dividir") {
  //     return `La operacion es dividir, y el resultado es ${a / b}`;
  //   }
  //   if (operacion === "restar") {
  //     return `La operacion es restar, y el resultado es ${a - b}`;
  //   }
  switch (operacion) {
    case "sumar":
      return `La operacion es sumar, y el resultado es ${a + b}`;
    case "restar":
      return `La operacion es restar, y el resultado es ${a - b}`;
    case "multiplicar":
      return `La operacion es multiplicar, y el resultado es ${a * b}`;
    case "dividir":
      return `La operacion es dividir, y el resultado es ${a / b}`;
    default:
      return "La operacion no es válida";
  }
}

console.log(detectarOperacion("sumar", 5, 6));
console.log(detectarOperacion("multiplicar", 5, 6));
console.log(detectarOperacion("dividir", 5, 6));
console.log(detectarOperacion("restar", 5, 6));
console.log(detectarOperacion("hola", 5, 6));
